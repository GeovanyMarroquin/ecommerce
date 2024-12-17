@php
    $maxWidth = [
        'sm' => 'modal-sm',
        'md' => '',
        'lg' => 'modal-lg',
        'xl' => 'modal-xl',
    ][$maxWidth ?? 'md'];
@endphp

<div class="modal fade" id="{{$modalId}}" tabindex="-1" aria-labelledby="{{$modalId}}Label" aria-hidden="true">
    <div class="modal-dialog {{$maxWidth}}">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="{{$modalId}}Label">{{$attributes->get("modalTitle")}}</h1>
                <x-button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></x-button>
            </div>
            <div class="modal-body">
                {{$slot}}
            </div>
            <div class="modal-footer">
                @if($attributes->has("cancelButtonText"))
                    <x-button class="btn-secondary" data-bs-dismiss="modal">Cerrar</x-button>
                @endif
                <x-button class="btn-primary" id="{{$acceptButtonId ?? ''}}">
                    {{$attributes->get("acceptButtonText") ?? "Aceptar"}}
                </x-button>
            </div>
        </div>
    </div>
</div>