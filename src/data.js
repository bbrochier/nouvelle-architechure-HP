const dataStoreHP = {
  menuOSE: [
    // Smartphone only
    {
      title: 'string', // remplacer les chaines "__SPACE__" par "&nbsp" et "__NL__" par "<br>"
      url: 'string',
      imageUrl: 'string',
      active: 'boolean', // menu a activer selon la page
      tracking: {
        refZ: 'string',
        idc: 'string',
        category: 'string',
        action: 'string',
        label: 'string',
        other: {
          track_refZ: 'string' // zid
        }
      },
      cacheKey: 'string'
    }
  ],
  enteteMaison: {
    title: 'string',
    images: {
      urlSmall: 'string',
      urlMedium: 'string',
      urlLarge: 'string',
      urlXLarge: 'string',
      alt: 'string'
    },
    tracking: {
      refZ: 'string',
      idc: 'string',
      category: 'string',
      action: 'string',
      label: 'string',
      other: {
        track_refZ: 'string' // refZ
      }
    },
    cacheKey: 'string'
  },
  menuN1: [
    {
      title: 'string', // remplacer les chaines "__SPACE__" par "&nbsp" et "__NL__" par "<br>"
      url: 'string',
      imageUrl: 'string',
      tracking: {
        refZ: 'string',
        idc: 'string',
        category: 'string',
        action: 'string',
        label: 'string',
        other: {
          track_refZ: 'string' // refZ
        }
      },
      cacheKey: 'string'
    }
  ],
  offresMaison: [
    {
      title: 'string',
      subTitle: 'string',
      image: {
        defaultUrl: 'string',
        landscapeUrl: 'string',
        alt: 'string'
      },
      contents: [
        {
          title: 'string',
          description: 'string'
        }
      ],
      button: {
        linkTarget: 'string',
        label: 'string',
        url: 'string'
      },
      tracking: {
        refZ: 'string',
        idc: 'string',
        category: 'string',
        action: 'string',
        label: 'string',
        other: {
          track_refZ: 'string' // refZ
        }
      },
      cacheKey: 'string'
    }
  ],
  mentionsLegales: {
    title: 'string',
    description: 'string',
    notes: [
      {
        title: 'string',
        description: 'string'
      }
    ]
  },
  offreMarchandMaison: {
    title: 'string',
    description: 'string',
    images: {
      urlSmall: 'string',
      urlMedium: 'string',
      urlLarge: 'string',
      alt: 'string'
    },
    button: {
      target: 'string',
      label: 'string',
      url: 'string'
    },
    tracking: {
      refZ: 'string',
      idc: 'string',
      category: 'string',
      action: 'string',
      label: 'string',
      other: {
        track_refZ: 'string' // refZ
      }
    },
    cacheKey: 'string'
  },
  reassuranceEcommerce: {
    title: 'string',
    items: [
      {
        title: 'string', // remplacer les chaines "__SPACE__" par "&nbsp" et "__NL__" par "<br>"
        image: {
          url: 'string',
          alt: ''
        },
        url: 'string',
        target: 'string',
        tracking: {
          refZ: 'string',
          idc: 'string',
          category: 'string',
          action: 'string',
          label: 'string',
          other: {
            track_refZ: 'string' // refZ
          }
        },
        cacheKey: 'string'
      }
    ]
  },
  fildAriane: [
    {
      label: 'string',
      url: 'string',
      tracking: {
        refZ: 'string',
        idc: 'string',
        category: 'string',
        action: 'string',
        label: 'string',
        other: {
          track_refZ: 'string' // refZ
        }
      },
      cacheKey: 'string'
    }
  ]
}

export default dataStoreHP
