
### [secure_file_priv](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_secure_file_priv)

~~~mysql
SELECT column, column
INTO OUTFILE '/path/filename'
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
FROM database.table
WHERE 1=1;
~~~