
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { action } from '@storybook/addon-actions'
    
    import '@sprinteins/dpdhl-uilib'


</script>


<Meta title="11_Components/Menu" component={null}/>

<Template let:args>
    <div class="container">
        <dpdhl-menu items={args.items} />
    </div>
</Template>

<style>
    .container {
        padding-left: 1rem;
    }
</style>

<Story name="Primary" args={{
    items:[
        { label:'Menu 1', click: action('Menu 1') },
        { label:'Menu 2', click: action('Menu 2') },
        { label:'Menu 3', click: action('Menu 3') },
    ]
}}/>

