import Mock from 'mockjs'
import apiData from './data.json'

Mock.mock('/menu', { code: 0, data: apiData.menu })
Mock.mock('/count', { code: 0, data: apiData.count })
Mock.mock('/course', { code: 0, data: apiData.course })
Mock.mock('/formword', { code: 0, data: apiData.formword })
Mock.mock('/wait', { code: 0, data: apiData.wait })