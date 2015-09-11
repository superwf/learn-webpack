describe 'test index', ->
  jasmine.getFixtures().fixturesPath = 'base/test/fixtures'

  beforeEach ->
    loadFixtures 'app.html'

  it 'has #app', ->
    expect(jQuery('title')).toContainText 'learn webpack'
    expect(jQuery('#app')).toExist()

  it 'has #app again', ->
    expect(jQuery('title')).toContainText 'learn webpack'
    expect(jQuery('#app')).toContainText 'jsx'
