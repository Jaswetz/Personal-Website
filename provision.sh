
#!/bin/bash

# Update aptitude.
aptitude update

# SCM tools & utils.
aptitude -y install git-core
aptitude -y install vim
# PHP (Apache as dependency).
aptitude -y install php5 php5-common php5-curl php-pear a2enmod rewrite
# Ruby, sass, what else do we need?
gem install susy
gem install bourbon
# Redirect default website
sed -i 's/var\/www/vagrant/g' /etc/apache2/sites-available/default
# Replact AllowOverride None to All to make sure apache processes .htaccess file
sed -i 's/None/All/g' /etc/apache2/sites-available/default
# enable Rewrite module (for url rewriting)
a2enmod rewrite
# assign ServerName
echo "ServerName dev.local" >> /etc/apache2/httpd.conf
# restart web server
/etc/init.d/apache2 restart
