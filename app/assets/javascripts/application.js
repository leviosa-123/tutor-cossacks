// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//
//В цій папці знаходиться весь js. Можете сміло створювати окремі файли, але всерівно перед загрузкою сайту, весь js
// скомпілюється в один файл, того назви функцій або змінних мають буди різними, щоб не перекрити одна одну
//
//Нижні строчки треба для подрубання  жекуері, тубролінків, і всіх інших джс файлів в цій папці.
//По дефолту ми можемо юзати jquery і coffee script. es6 немає, його треба буде нам подрубити
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function test() {
  alert('lol')
}
