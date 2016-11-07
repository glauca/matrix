server {
    listen       80;
    server_name  api.app;

    charset utf-8;

    root /api/public;
    index index.html index.php;
    location / {
        try_files $uri $uri/ /index.php$is_args$args;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    #error_page   500 502 503 504  /50x.html;
    #location = /50x.html {
    #    #root   share/nginx/site;
    #}

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    location ~ \.php$ {
        add_header Access-Control-Allow-Origin "*";
        add_header Access-Control-Allow-Methods "GET,POST,PUT,DELETE,OPTIONS";
        add_header Access-Control-Allow-Headers "Token, App-Key, App-Secret, Sign-Time, Cache-Control, X-Requested-With";
        add_header Access-Control-Allow-Credentials "true";
        add_header Access-Control-Max-Age 1728000;

        if ($request_method = 'OPTIONS') {
             return 204;
        }

        include fastcgi.conf;

        fastcgi_pass   127.0.0.1:9000;
    }

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}