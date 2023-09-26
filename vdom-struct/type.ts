export interface Text {
    type: "text";
    attr: null;
    children: string;
}

export interface Tag {
    type: string;
    attr: {
        [key: string]: string;
    };
    children: (Tag | Text)[] | null;
}

export type Vdom = Tag | Text;

export type Element = {
    [key: string]: any;
}