<div class="page-heading">
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                @if($attributes->has("title"))
                    <h3>{{$attributes->get("title")}}</h3>
                    {{--                    <p class="text-subtitle text-muted">Navbar will appear in top of the page.</p>--}}
                @endif
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                    <ol class="breadcrumb">
                        @foreach($attributes->get("options") as $opt => $url)
                            @if($loop->last)
                                <li class="breadcrumb-item active">{{$opt}}</li>
                            @else
                                <li class="breadcrumb-item">
                                    <a href="{{$url}}">{{$opt}}</a>
                                </li>
                            @endif

                        @endforeach
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>
