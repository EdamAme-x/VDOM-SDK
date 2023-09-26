const vdom = {
    type: "div",
    attr: {
        class: "app",
    },
    children: [
        {
            type: "img",
            attr: {
                src: "https://deno.com/logo.svg",
                alt: "deno logo"
            }
        },
        {
            type: "text",
            children: "Deno"
        }
    ]
}