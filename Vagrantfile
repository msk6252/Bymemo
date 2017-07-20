# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  GUEST_RUBY_VERSION = '2.3.2'
  GUEST_RAILS_VERSION = '4.2.7'

  config.vm.box = "bento/centos-6.7"

  config.vm.hostname = "react"
  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.synced_folder ".", "/home/react/"

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "1024"
  end

  # privileged: true => rootユーザにインスト―ル
  config.vm.provision "shell", privileged: true, inline: <<-SHELL
    # インストール中にコマンドラインに出力する
    function install {
      echo installing $1
      shift
      yum -y install "$@" >/dev/null 2>&1
    }

    yum -y update >/dev/null 2>&1
    install "development tools"  gcc-c++ glibc-headers openssl-devel readline libyaml-devel readline-devel zlib zlib-devel
    install "Git" git
    yum install -y http://vault.centos.org/6.5/updates/x86_64/Packages/kernel-devel-2.6.32-431.3.1.el6.x86_64.rpm
    yum -y update kernel
FLUSH PRIVILEGES;
    ln -sf  /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
    echo "ZONE=\"Asia/Tokyo\"" > /etc/sysconfig/clock
    service crond restart
  SHELL

  # privileged: true => vagrantユーザにインスト―ル
  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    yum install -y git
    git clone git://github.com/creationix/nvm.git ~/.nvm
    source ~/.nvm/nvm.sh
    nvm install v6.9.4
    echo "if [[ -s ~/.nvm/nvm.sh ]]; then\n source ~/.nvm/nvm.sh\n fi" >> ~/.bash_profile
  SHELL
end
