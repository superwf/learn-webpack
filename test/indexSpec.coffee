describe 'test index', ->
  $ = jQuery
  it 'has h2', ->
    expect(1).toEqual(1)
    expect($('body')).toContainText 'wangfan'
    expect($('title')).toContainText 'learn webpack'
