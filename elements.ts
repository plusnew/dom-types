type element = {
  domInterface: any;
  inherits?: string;
  deprecated: boolean
  properties: {
    [attributeName: string]: {
      required: boolean;
      types: string[];
      booleanAttribute: boolean;
      onlyIdl: boolean;
      deprecated: boolean;
    }
  }
};

type elements = {
  types: {
    [typeName: string]: string[];
  }
  htmlElements: {
    [elementName: string]: element;
  }
  abstract: {
    [abstractName: string]: element;
  }
}

const elements: elements = {
  types: {
    referrerpolicy: ['"no-referrer"', '"no-referrer-when-downgrade"', '"orgigin"', '"origin-when-cross-origin"', '"unsage-url"'],
    target: ['"_self"', '"_blank"', '"_parent"', '"_top"'],
    crossorigin: ['"anonymous"', '"use-credentials"'],
    importance: ['"auto"', '"high"', '"low"'],
    preload: ['"none"', '"metadata"', '"auto"', '""'],
  },
  htmlElements: {
    // Main root
    html: {
      domInterface: HTMLHtmlElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        xmlns: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },

    // Document metadata
    link: {
      domInterface: HTMLLinkElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        as: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        crossorigin: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['crossorigin'],
        },
        href: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        hreflang: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        importance: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['importance'],
        },
        integrity: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        referrerpolicy: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['referrerpolicy'],
        },
        rel: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        sizes: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        title: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        type: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'], // @TODO add mimetype-array
        },
      },
    },
    meta: {
      domInterface: HTMLMetaElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        content: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        "http-equiv": {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"content-security-policy"', '"refresh"', '"set-cookie"'],
        },
        name: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: [
            '"application-name"',
            '"author"',
            '"description"',
            '"keywords"',
            '"referrer',
            '"creator"',
            '"googlebot"',
            '"publisher"',
            '"robots"',
            '"slurl"',
            '""viewport"',
          ],
        },
      },
    },
    style: {
      domInterface: HTMLStyleElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        type: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        media: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        content: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        nonce: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        title: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    title: {
      domInterface: HTMLTitleElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },

    // Sectioning root
    body: {
      domInterface: HTMLBodyElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        onafterprint: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onbeforeprint: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onbeforeunload: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onblur: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onerror: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onfocus: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onhashchange: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onlanguagechange: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onload: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onmessage: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onoffline: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        ononline: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onpopstate: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onredo: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onresize: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onstorage: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onundo: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
        onunload: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"(event: Event) => void"'],
        },
      },
    },
    head: {
      domInterface: HTMLHeadElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },

    // Content Sectioning
    address: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    article: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    aside: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    footer: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    header: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    h1: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    h2: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    h3: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    h4: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    h5: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    h6: {
      domInterface: HTMLHeadingElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    hgroup: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    main: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    nav: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    section: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },

    // Text content
    blockquote: {
      domInterface: HTMLQuoteElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        cite: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    dd: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    dir: {
      domInterface: HTMLDirectoryElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {},
    },
    div: {
      domInterface: HTMLDivElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    dl: {
      domInterface: HTMLDListElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    dt: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    figcaption: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    figure: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    hr: {
      domInterface: HTMLHRElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    li: {
      domInterface: HTMLLIElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        value: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
      },
    },
    ol: {
      domInterface: HTMLOListElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        reversed: {
          required: true,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        start: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        type: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"a"', '"A"', '"i"', '"I"', '"1"'],
        },
      },
    },
    p: {
      domInterface: HTMLParagraphElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    pre: {
      domInterface: HTMLPreElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    ul: {
      domInterface: HTMLUListElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },

    // Inline text semantics
    a: {
      domInterface: HTMLAnchorElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        download: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        href: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        hreflang: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        ping: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        referrerpolicy: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['referrerpolicy'],
        },
        rel: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        target: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['target'],
        },
        type: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    abbr: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    b: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    bdi: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    bdo: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    br: {
      domInterface: HTMLBRElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        clear: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    cite: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    code: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    data: {
      domInterface: HTMLDataElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        value: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    dfn: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    em: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    i: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    kbd: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    mark: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    q: {
      domInterface: HTMLQuoteElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        cite: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    rb: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    rp: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    rt: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    rtc: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    ruby: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    s: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    samp: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    small: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    span: {
      domInterface: HTMLSpanElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    strong: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    sub: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    sup: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    time: {
      domInterface: HTMLTimeElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        datetime: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    tt: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {},
    },
    u: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    var: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    wbr: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },

    // Image and multimedia
    area: {
      domInterface: HTMLAreaElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        alt: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        coords: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        download: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        href: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        hreflang: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        name: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: true,
          types: ['string'],
        },
        nohref: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: true,
          types: ['string'],
        },
        ping: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        referrerpolicy: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['referrerpolicy'],
        },
        rel: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        shape: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        tabindex: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: true,
          types: ['string'],
        },
        target: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        type: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: true,
          types: ['string'],
        },
      },
    },
    audio: {
      domInterface: HTMLAudioElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        autoplay: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        crossorigin: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['crossorigin'],
        },
        loop: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        muted: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        preload: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['preload'],
        },
        src: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    img: {
      domInterface: HTMLImageElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        alt: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        crossorigin: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['crossorigin'],
        },
        decoding: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"sync"', '"async"', '"auto"'],
        },
        height: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        importance: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['importance'],
        },
        ismap: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        referrerpolicy: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['referrerpolicy'],
        },
        sizes: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        src: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        srcset: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        width: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        usemap: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    map: {
      domInterface: HTMLMapElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        name: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    track: {
      domInterface: HTMLTrackElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        'default': {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        kind: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"subtitles"', '"captions"', '"descriptions"', '"chapters"', '"metadata"'],
        },
        src: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        srclang: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    video: {
      domInterface: HTMLVideoElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        autoplay: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        buffered: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        controls: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        crossorigin: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['crossorigin'],
        },
        height: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        loop: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        muted: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        preload: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['preload'],
        },
        poster: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        src: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        width: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        playsinline: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
      },
    },

    // Embedded content
    applet: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {}, // @TODO didn't add properties for deprecated element
    },
    embed: {
      domInterface: HTMLEmbedElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        height: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        src: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        type: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        width: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
      },
    },
    iframe: {
      domInterface: HTMLIFrameElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        allow: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        height: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        importance: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['importance'],
        },
        name: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        referrerpolicy: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['referrerpolicy'],
        },
        sandbox: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: [
            '"allow-forms"',
            '"allow-modals"',
            '"allow-orientation-lock"',
            '"allow-pointer-lock"',
            '"allow-popups"',
            '"allow-popups-to-escape-sandbox"',
            '"allow-presentation"',
            '"allow-same-origin"',
            '"allow-ScriptProcessorNodeallow-top-navigation"',
            '"allow-top-navigation-by-user-activation"',
          ],
        },
        src: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        srcdoc: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        width: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
      },
    },
    noembed: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: true,
      properties: {},
    },
    object: {
      domInterface: HTMLObjectElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        data: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        form: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        height: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        name: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        type: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        typemustmatch: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        usemap: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        width: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
      },
    },
    param: {
      domInterface: HTMLParamElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        name: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        value: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    picture: {
      domInterface: HTMLPictureElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    source: {
      domInterface: HTMLSourceElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        sizes: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        src: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        srcset: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        type: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        media: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },

    // Scripting
    canvas: {
      domInterface: HTMLCanvasElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        height: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        width: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
      },
    },
    noscript: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    script: {
      domInterface: HTMLScriptElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        async: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        crossorigin: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['crossorigin'],
        },
        defer: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['boolean'],
        },
        importance: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['importance'],
        },
        integrity: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        nomodule: {
          required: false,
          booleanAttribute: true,
          onlyIdl: false,
          deprecated: false,
          types: ['nomodule'],
        },
        nonce: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        src: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        text: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        type: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },

    // Demarcating edits
    del: {
      domInterface: HTMLModElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        cite: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        datetime: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },
    ins: {
      domInterface: HTMLModElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        cite: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        datetime: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
      },
    },

    // Table content
    caption: {
      domInterface: HTMLTableCaptionElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    col: {
      domInterface: HTMLTableColElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        span: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
      },
    },
    colgroup: {
      domInterface: HTMLTableColElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        span: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
      },
    },
    table: {
      domInterface: HTMLTableElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
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
        colspan: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        headers: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        rowspan: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
      },
    },
    tfoot: {
      domInterface: HTMLTableSectionElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    th: {
      domInterface: HTMLElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {
        abbr: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        colspan: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        headers: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        rowspan: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['number'],
        },
        scope: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['"row"', '"col"', '"rowgroup"', '"colgroup"', '"auto"'],
        },
      },
    },
    thead: {
      domInterface: HTMLTableSectionElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
    },
    tr: {
      domInterface: HTMLTableRowElement,
      inherits: 'htmlElement',
      deprecated: false,
      properties: {},
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
        type: {
          required: true,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: [
            '"button"',
            '"checkbox"',
            '"color"',
            '"date"',
            '"datetime-local"',
            '"email"',
            '"file"',
            '"hidden"',
            '"image"',
            '"month"',
            '"number"',
            '"password"',
            '"radio"',
            '"range"',
            '"reset"',
            '"search"',
            '"submit"',
            '"tel"',
            '"text"',
            '"time"',
            '"url"',
            '"week"',
          ]
        },
        value: {
          required: false,
          booleanAttribute: false,
          onlyIdl: false,
          deprecated: false,
          types: ['string'],
        },
        valueAsNumber: {
          required: false,
          booleanAttribute: false,
          onlyIdl: true,
          deprecated: false,
          types: ['number'],
        },
        valueAsDate: {
          required: false,
          booleanAttribute: false,
          onlyIdl: true,
          deprecated: false,
          types: ['number'],
        },
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
