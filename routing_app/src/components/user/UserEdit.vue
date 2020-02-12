<template>
    <div class="main">
        <h3> Edit The User {{ $route.params.id }}</h3>
        <p>Locale : {{ $route.query.locale }}</p>
        <p> Analytics : {{ $route.query.q }}</p>
        <button class="btn btn-primary"> Confirm </button>
    </div>
</template>