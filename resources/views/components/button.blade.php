<button {{ $attributes->merge(['type' => 'button', 'class' => 'btn', "id" => ""]) }}>
    {{ $slot }}
</button>