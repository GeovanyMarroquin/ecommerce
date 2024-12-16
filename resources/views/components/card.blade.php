<div class="section">
    <div class="card">
        @if($attributes->has("title"))
            <div class="card-header">
                <h5 class="card-title h5">{{$attributes->get('title')}}</h5>
            </div>
        @endif
        <div class="card-body">
            {{$slot}}
        </div>
    </div>
</div>
