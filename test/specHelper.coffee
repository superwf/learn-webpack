#d = document.createElement('div')
#d.setAttribute 'id', 'app'
#document.body.appendChild d
jQuery.ajax {
  url: 'base/public/index.html',
  async: false,
  success: (data)->
    data = data.replace /<script[\s\S]*?\/script>/g, ''
    data = data.replace /<link(\s*[^>]*)*?>/g, ''
    data = data.replace /<meta(\s*[^>]*)*?>/g, ''
    data = data.replace /^[\s\S]+?<body[^>]*?>/mg, ''
    data = data.replace /<\/body>[\s\S]+$/mg, ''
    data = data.replace /<img[^>]+?>/mg, ''
    data = data.replace /\n/mg, ''
    data = data.replace /^\s+/mg, ''
    data = data.replace /\s+$/mg, ''
    dom = document.createElement 'div'
    dom.innerHTML = data
    document.body.appendChild dom
}
