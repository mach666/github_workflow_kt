const app=require('./index')
const request =require('supertest')



describe("/ GET",()=>{
    it("responds with 200",(done)=>{
        request(app).get('/').expect(200,done)
    })
    it("responds with message",(done)=>{
        request(app).get('/').expect(' This is Show and Tell on Github Actions',done)
    })
})