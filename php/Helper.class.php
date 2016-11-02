<?php

/**
 * Helper class
 */
class Helper
{
    /**
     * 验证是否是合法的身份证号 简单验证
     */
    public static function isValidIdCardNo($idcard)
    {
        $length = strlen($idcard);

        /** 15位老身份证 */
        if ($length == 15) {
            if (checkdate(substr($idcard, 8, 2), substr($idcard, 10, 2), '19' . substr($idcard, 6, 2))) {
                return true;
            }
        }

        /** 18位二代身份证号 */
        if ($length == 18) {
            if (!checkdate(substr($idcard, 10, 2), substr($idcard, 12, 2), substr($idcard, 6, 4))) {
                return false;
            }

            $idcard = str_split($idcard);
            if (strtolower($idcard[17]) == 'x') {
                $idcard[17] = '10';
            }

            /** 加权求和 */
            $sum = 0;
            /** 加权因子 */
            $wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
            for ($i = 0; $i < 17; $i++) {
                $sum += $wi[$i] * $idcard[$i];
            }

            /** 得到验证码所位置 */
            $position = $sum % 11;

            /** 身份证验证位值 10代表X */
            $code = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
            if ($idcard[17] == $code[$position]) {
                return true;
            }
        }

        return false;
    }

    /**
     * 验证是否是合法的银行卡 不包含信用卡
     */
    public static function isValidBankCard($card)
    {
        if (!is_numeric($card)) {
            return false;
        }

        if (strlen($card) < 16 || strlen($card) > 19) {
            return false;
        }

        $cardHeader = [10, 18, 30, 35, 37, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 60, 62, 65, 68, 69, 84, 87, 88, 94, 95, 98, 99];
        if (!in_array(substr($card, 0, 2), $cardHeader)) {
            return false;
        }

        $numShouldCheck = str_split(substr($card, 0, -1));
        krsort($numShouldCheck);

        $odd = $odd['gt9'] = $odd['gt9']['tens'] = $odd['gt9']['unit'] = $odd['lt9'] = $even = [];
        array_walk($numShouldCheck, function ($item, $key) use (&$odd, &$even) {
            if (($key & 1)) {
                $t = $item * 2;
                if ($t > 9) {
                    $odd['gt9']['unit'][] = intval($t % 10);
                    $odd['gt9']['tens'][] = intval($t / 10);
                } else {
                    $odd['lt9'][] = $t;
                }
            } else {
                $even[] = $item;
            }
        });

        $total = array_sum($even);
        array_walk_recursive($odd, function ($item, $key) use (&$total) {
            $total += $item;
        });

        $luhm = 10 - ($total % 10 == 0 ? 10 : $total % 10);

        $lastNumOfCard = substr($card, -1, 1);
        if ($luhm != $lastNumOfCard) {
            return false;
        }

        return true;
    }
}
