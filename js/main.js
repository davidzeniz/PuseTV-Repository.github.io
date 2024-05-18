$(document).ready(function(){
    // Agregar scroll ligero y rápido
    $('.dashboard-sideBar-ct, .dashboard-contentPage, .Notifications-body').css({
        'overflow-y': 'auto',
        '-webkit-overflow-scrolling': 'touch' // Propiedad específica para un scroll suave en dispositivos iOS
    });

    $('.btn-sideBar-SubMenu').on('click', function(){
        var SubMenu=$(this).next('ul');
        var iconBtn=$(this).children('.zmdi-caret-down');
        if(SubMenu.hasClass('show-sideBar-SubMenu')){
            iconBtn.removeClass('zmdi-hc-rotate-180');
            SubMenu.removeClass('show-sideBar-SubMenu');
        }else{
            iconBtn.addClass('zmdi-hc-rotate-180');
            SubMenu.addClass('show-sideBar-SubMenu');
        }
    });

    $('.btn-exit-system').on('click', function(){
        swal({
            title: 'Estas Seguro?',
            text: "Ventana para Cerrar Sesion",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#03A9F4',
            cancelButtonColor: '#F44336',
            confirmButtonText: '<i class="zmdi zmdi-run"></i> Sí, Salir!',
            cancelButtonText: '<i class="zmdi zmdi-close-circle"></i> No, Cancelar!'
        }).then(function () {
            window.location.href="index.html";
        });
    });

    $('.btn-menu-dashboard').on('click', function(){
        var body=$('.dashboard-contentPage');
        var sidebar=$('.dashboard-sideBar');
        if(sidebar.css('pointer-events')=='none'){
            body.removeClass('no-paddin-left');
            sidebar.removeClass('hide-sidebar').addClass('show-sidebar');
        }else{
            body.addClass('no-paddin-left');
            sidebar.addClass('hide-sidebar').removeClass('show-sidebar');
        }
    });

    $('.btn-Notifications-area').on('click', function(){
        var NotificationsArea=$('.Notifications-area');
        if(NotificationsArea.css('opacity')=="0"){
            NotificationsArea.addClass('show-Notification-area');
        }else{
            NotificationsArea.removeClass('show-Notification-area');
        }
    });

    $('.btn-search').on('click', function(){
        swal({
            title: 'What are you looking for?',
            confirmButtonText: '<i class="zmdi zmdi-search"></i>  Search',
            confirmButtonColor: '#03A9F4',
            showCancelButton: true,
            cancelButtonColor: '#F44336',
            cancelButtonText: '<i class="zmdi zmdi-close-circle"></i> Cancel',
            html: '<div class="form-group label-floating">'+
                    '<label class="control-label" for="InputSearch">write here</label>'+
                    '<input class="form-control" id="InputSearch" type="text">'+
                '</div>'
        }).then(function () {
            swal(
                'You wrote',
                ''+$('#InputSearch').val()+'',
                'success'
            )
        });
    });

    $('.btn-modal-help').on('click', function(){
        $('#Dialog-Help').modal('show');
    });
});
