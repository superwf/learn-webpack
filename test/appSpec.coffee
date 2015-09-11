describe 'test index', ->
  jasmine.getFixtures().fixturesPath = 'base/test/fixtures'

  beforeEach ->
    loadFixtures 'app.html'

  it 'has h2', ->
    expect(1).toEqual(1)
    #expect($('body')).toContainText 'wangfan'
    expect(jQuery('title')).toContainText 'learn webpack'
    expect(jQuery('#app')).toExist()
