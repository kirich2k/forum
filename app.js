$(function() {
    const body = $('body'); // Получение переменной блока body    
    const menu = $('#menu'); // Получение переменной блока menu
    const burger = $('#burger'); // Получение переменной блока burger
    const burger_item = $('#burger_item'); // Получение переменной блока burger_item
    const main = $('#main'); // Получение переменной блока main
    const footer_inner = $('#footer_inner'); // Получение переменной блока footer_inner
    const button_style = $('#button_style'); // Получение переменной блока button_style
    const expand = $('#expand'); // Получение переменной блока expand
    const reduce = $('#reduce'); // Получение переменной блока reduce
    const button_skin = $('#button_skin'); // Получение переменной блока button_skin
    const selection_style = $('#selection_style'); // Получение переменной блока selection_style
    const selection_menu = $('#selection_menu'); // Получение переменной блока selection_menu
    const menu_style_close_button = $('#menu_style_close_button'); // Получение переменной блока menu_style_close_button
    const out_selection_menu = $('#out_selection_menu');
    const Default = $('#Default');
    const White = $('#White');
    const Black = $('#Black');
    const title_inner = $('.title_inner');
    const base = $('.base');
    const group = $('.group');
    const container_title = $('.container_title');
    const base_text = $('.base_text');
    const base_sidebar = $('.base_sidebar');
    const base_text_sidebar = $('.base_text_sidebar');
    const people_img = $('#people_img');
    const people_black_img = $('#people_black_img');
    const footer = $('#footer');
    const special = $('#special');
    const footer_nav_link = $('.footer_nav_link');
    const footer_button = $('.footer_button');
    const header = $('#header');
    const nav_link = $('.nav_link');
    const menu_link = $('.menu_link');
    const container_menu = $('#container_menu');
    const main_inner = $('.main_inner');
    const sidebar = $('#sidebar');
    const selection_menu_inner = $('#selection_menu_inner');
    const menu_style_toggle = $('.menu_style_toggle');
    const menu_style_inner = $('#menu_style_inner');
    const menu_style_text = $('#menu_style_text');
    const special_rp = $('#special_rp');
    const menu_style_close = $('#menu_style_close');
    const menu_style_close_white = $('#menu_style_close_white');
    let width; // Ширина экрана
    
    $(burger).click(function(){
        if (width <= 425) {
            menu.toggleClass('active');
            menu.slideToggle(500);
            body.toggleClass('lock');
            burger.toggleClass('active');
            burger_item.toggleClass('active');
        };
    });
    
    $(button_style).click(function(){
        button_style.toggleClass('active');
        if($(button_style).hasClass('active')){
            expand.addClass('active');
            reduce.addClass('active');
            main.addClass('wide');
            main_inner.addClass('wide');
            footer_inner.addClass('wide');
        } else {
            expand.removeClass('active');
            reduce.removeClass('active');
            main.removeClass('wide');
            main_inner.removeClass('wide');
            footer_inner.removeClass('wide');
        };
    });
    
    $(button_skin).click(function(){
        button_skin.toggleClass('active');
        body.toggleClass('lock');
        if($(button_skin).hasClass('active')){
            selection_style.addClass('active');
            selection_menu.addClass('active');
            out_selection_menu.addClass('active');
        } else {
            selection_style.removeClass('active');
            selection_menu.removeClass('active');
            out_selection_menu.removeClass('active');
        };
    });
    
    $(menu_style_close_button).click(function(){
        if($(selection_menu).hasClass('active')){
            selection_menu.removeClass('active');
            out_selection_menu.removeClass('active');
            body.removeClass('lock');
            button_skin.removeClass('active');
            selection_style.removeClass('active');
        } else {
            alert('Произошла ошибка, обновите страницу.')
        };
    });
    
    $(White).click(function(){
        if($(selection_menu).hasClass('active')){
            body.addClass('white');
            title_inner.addClass('white');
            base.addClass('white');
            group.addClass('white');
            container_title.addClass('white');
            base_text.addClass('white');
            base_sidebar.addClass('white');
            base_text_sidebar.addClass('white');
            people_img.addClass('disabled');
            people_black_img.addClass('active');
            footer.addClass('white');
            special.addClass('white');
            selection_style.addClass('white');
            footer_nav_link.addClass('white');
            footer_button.addClass('white');
            header.addClass('white');
            nav_link.addClass('white');
            burger_item.addClass('white');
            menu.addClass('white');
            menu_link.addClass('white');
            container_menu.addClass('white');
            sidebar.addClass('white');
            selection_menu_inner.addClass('white');
            menu_style_toggle.addClass('white');
            menu_style_inner.addClass('white');
            menu_style_text.addClass('white');
            special_rp.addClass('white');
            menu_style_close.addClass('disabled');
            menu_style_close_white.addClass('active');
            selection_menu.removeClass('active');
            out_selection_menu.removeClass('active');
            body.removeClass('lock');
            button_skin.removeClass('active');
            selection_style.removeClass('active');
         };
    });
    
    $(Black).click(function(){
        if($(selection_menu).hasClass('active')){
            body.removeClass('white');
            title_inner.removeClass('white');
            base.removeClass('white');
            group.removeClass('white');
            container_title.removeClass('white');
            base_text.removeClass('white');
            base_sidebar.removeClass('white');
            base_text_sidebar.removeClass('white');
            people_img.removeClass('disabled');
            people_black_img.removeClass('active');
            footer.removeClass('white');
            special.removeClass('white');
            selection_style.removeClass('white');
            footer_nav_link.removeClass('white');
            footer_button.removeClass('white');
            header.removeClass('white');
            nav_link.removeClass('white');
            burger_item.removeClass('white');
            menu.removeClass('white');
            menu_link.removeClass('white');
            container_menu.removeClass('white');
            sidebar.removeClass('white');
            selection_menu_inner.removeClass('white');
            menu_style_toggle.removeClass('white');
            menu_style_inner.removeClass('white');
            menu_style_text.removeClass('white');
            special_rp.removeClass('white');
            menu_style_close.removeClass('disabled');
            menu_style_close_white.removeClass('active');
            selection_menu.removeClass('active');
            out_selection_menu.removeClass('active');
            body.removeClass('lock');
            button_skin.removeClass('active');
            selection_style.removeClass('active');
        };
    });
    
    
    $(Default).click(function(){
        if($(selection_menu).hasClass('active')){
            body.removeClass('white');
            title_inner.removeClass('white');
            base.removeClass('white');
            group.removeClass('white');
            container_title.removeClass('white');
            base_text.removeClass('white');
            base_sidebar.removeClass('white');
            base_text_sidebar.removeClass('white');
            people_img.removeClass('disabled');
            people_black_img.removeClass('active');
            footer.removeClass('white');
            special.removeClass('white');
            selection_style.removeClass('white');
            footer_nav_link.removeClass('white');
            footer_button.removeClass('white');
            header.removeClass('white');
            nav_link.removeClass('white');
            burger_item.removeClass('white');
            menu.removeClass('white');
            menu_link.removeClass('white');
            container_menu.removeClass('white');
            sidebar.removeClass('white');
            selection_menu_inner.removeClass('white');
            menu_style_toggle.removeClass('white');
            menu_style_inner.removeClass('white');
            menu_style_text.removeClass('white');
            special_rp.removeClass('white');
            menu_style_close.removeClass('disabled');
            menu_style_close_white.removeClass('active');
            selection_menu.removeClass('active');
            out_selection_menu.removeClass('active');
            body.removeClass('lock');
            button_skin.removeClass('active');
            selection_style.removeClass('active');
        };
    });
    
    $(window).on(setInterval(function(){
        width = $(window).width();
        if (width >= 425) {
            menu.removeClass('active');
            menu.slideUp(300);
            body.removeClass('lock');
            burger.removeClass('active');
            burger_item.removeClass('active');
        };
    }, 100));    
});