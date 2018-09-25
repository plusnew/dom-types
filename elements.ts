type element = {
  domInterface: any;
  inherits?: string;
  deprecated: boolean
  properties: {
    [attributeName: string]: {
      required: boolean;
      types: string[];
      booleanAttribute: boolean;
    }
  }
};

type elements = {
  htmlElements: {
    [elementName: string]: element;
  }
  abstract: {
    [abstractName: string]: element;
  }
}

const elements: elements = {
  htmlElements: {
    // Main root
    html: {
      domInterface: HTMLHtmlElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Document metadata
    link: {
      domInterface: HTMLLinkElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    meta: {
      domInterface: HTMLMetaElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    style: {
      domInterface: HTMLStyleElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    title: {
      domInterface: HTMLTitleElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Sectioning root
    body: {
      domInterface: HTMLBodyElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    head: {
      domInterface: HTMLHeadElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Content Sectioning
    address: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    article: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    aside: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    footer: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    header: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    h1: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    h2: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    h3: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    h4: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    h5: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    h6: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    hgroup: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    main: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    nav: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    section: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Text content
    blockquote: {
      domInterface: HTMLQuoteElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    dd: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    dir: {
      domInterface: HTMLDirectoryElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {

      },
    },
    div: {
      domInterface: HTMLDivElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    dl: {
      domInterface: HTMLDListElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    dt: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    fiqcaption: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    figure: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    hr: {
      domInterface: HTMLHRElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    li: {
      domInterface: HTMLLIElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    ol: {
      domInterface: HTMLOListElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    p: {
      domInterface: HTMLParagraphElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    pre: {
      domInterface: HTMLPreElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    ul: {
      domInterface: HTMLUListElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Inline text semantics
    a: {
      domInterface: HTMLAnchorElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    abbr: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    b: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    bdi: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    bdo: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    br: {
      domInterface: HTMLBRElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    cite: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    code: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    data: {
      domInterface: HTMLDataElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    dfn: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    em: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    i: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    kbd: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    mark: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    q: {
      domInterface: HTMLQuoteElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    rb: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    rp: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    rt: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    rtc: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    ruby: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    s: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    samp: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    small: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    span: {
      domInterface: HTMLSpanElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    strong: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    sub: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    sup: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    time: {
      domInterface: HTMLTimeElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    tt: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {

      },
    },
    u: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    var: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    wbr: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Image and multimedia
    area: {
      domInterface: HTMLAreaElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    audio: {
      domInterface: HTMLAudioElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    img: {
      domInterface: HTMLImageElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    map: {
      domInterface: HTMLMapElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    track: {
      domInterface: HTMLTrackElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    video: {
      domInterface: HTMLVideoElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Embedded content
    applet: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {

      },
    },
    embed: {
      domInterface: HTMLEmbedElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    iframe: {
      domInterface: HTMLIFrameElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    noembed: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {

      },
    },
    object: {
      domInterface: HTMLObjectElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    param: {
      domInterface: HTMLParamElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    picture: {
      domInterface: HTMLPictureElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    source: {
      domInterface: HTMLSourceElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Scripting
    canvas: {
      domInterface: HTMLCanvasElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    noscript: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    script: {
      domInterface: HTMLScriptElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Demarcating edits
    del: {
      domInterface: HTMLModElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    ins: {
      domInterface: HTMLModElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Table content
    caption: {
      domInterface: HTMLTableCaptionElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    col: {
      domInterface: HTMLTableColElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    colgroup: {
      domInterface: HTMLTableColElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    table: {
      domInterface: HTMLTableElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    tbody: {
      domInterface: HTMLTableSectionElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    td: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    tfoot: {
      domInterface: HTMLTableSectionElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    th: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    thead: {
      domInterface: HTMLTableSectionElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    tr: {
      domInterface: HTMLTableRowElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Forms
    button: {
      domInterface: HTMLButtonElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    datalist: {
      domInterface: HTMLDataListElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    fieldset: {
      domInterface: HTMLFieldSetElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    form: {
      domInterface: HTMLFormElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    input: {
      domInterface: HTMLInputElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    label: {
      domInterface: HTMLLabelElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    legend: {
      domInterface: HTMLLegendElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    meter: {
      domInterface: HTMLMeterElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    optgroup: {
      domInterface: HTMLOptGroupElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    option: {
      domInterface: HTMLOptionElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    output: {
      domInterface: HTMLOutputElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    progress: {
      domInterface: HTMLProgressElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    select: {
      domInterface: HTMLSelectElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    textarea: {
      domInterface: HTMLTextAreaElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Interactive elements
    details: {
      domInterface: HTMLDetailsElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    dialog: {
      domInterface: HTMLDialogElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    menu: {
      domInterface: HTMLMenuElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    menuitem: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {

      },
    },
    summary: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },

    // Web Components
    content: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {

      },
    },
    element: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {

      },
    },
    shadow: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {

      },
    },
    slot: {
      domInterface: HTMLElement, // actually is: HTMLSlotElement
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
    template: {
      domInterface: HTMLTemplateElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {

      },
    },
  },
  abstract: {
    htmlElement: {
      domInterface: HTMLElement,
      deprecated: false,
      properties: {

      },
    },
  },
};
