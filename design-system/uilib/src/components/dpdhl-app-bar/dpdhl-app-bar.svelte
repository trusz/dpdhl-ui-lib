<script lang='ts'>

</script>
<svelte:options tag="dpdhl-app-bar" />

<main>
    <div class="left">
        <slot name="left" />
    </div>
    <div class="middle">
        <slot name="middle" />
    </div>
    <div class="right">
        <slot name="right" />
    </div>
</main>

<style>
    main{
        height: var(--app-bar__height, 4em);

        background-color: var(--app-bar__background-color, var(--color-postyellow));

        display:        flex;
        flex-direction: row;
        align-items:    center;
        padding:        0 var(--padding-left-right);
    }

    .middle{
        flex-grow: 1;
    }

    .left, 
    .right {
        flex-grow: 0;
    }
</style>