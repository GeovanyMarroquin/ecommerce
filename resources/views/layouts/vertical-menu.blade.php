<div id="sidebar" class="active">
    <div class="sidebar-wrapper active">
        <div class="sidebar-header">
            <div class="d-flex justify-content-between">
                <div class="logo">
                    <a href="{{route("home")}}"><img src="{{asset("assets/images/logo.png")}}" alt="Logo" srcset=""></a>
                </div>
                <div class="toggler">
                    <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                </div>
            </div>
        </div>
        <div class="sidebar-menu">

            <ul class="menu">
                <li class="sidebar-title">Menu</li>
                <li class="sidebar-item active">
                    <a href="{{route("home")}}" class='sidebar-link'>
                        <i class="bi bi-grid-fill"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="{{route("users.index")}}" class='sidebar-link'>
                        <i class="bi bi-people-fill"></i>
                        <span>Usuarios</span>
                    </a>
                </li>
                {{-- Multiple menu --}}
                {{--<li class="sidebar-item active has-sub">
                    <a href="#" class='sidebar-link'>
                        <i class="bi bi-grid-fill"></i>
                        <span>Dashboard</span>
                    </a>
                    <ul class="submenu active">
                        <li class="submenu-item active">
                            <a href="">Default Layout</a>
                        </li>
                        <li class="submenu-item ">
                            <a href="">1 Column</a>
                        </li>
                        <li class="submenu-item ">
                            <a href="">Vertical with Navbar</a>
                        </li>
                        <li class="submenu-item ">
                            <a href="">Horizontal Menu</a>
                        </li>
                    </ul>
                </li>--}}
            </ul>
        </div>
        <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
    </div>
</div>
