/* eslint-disable no-unused-vars */
import { generatorAPIS } from '@/lib/request';

/**
 * '[POST|GET|PUT|DELETE|...] [url] [d(data)(.(f|formData)):|q(query):|path:][keys with `,`]'
 *
 * d|data => data for POST and PUT
 *    - if data in request is array, you can use `[(d|data)]`;
 *    - if you want to pass all params to backend, you can use `(d|data):*`;
 *    - if you want to pass FormData to backend, you can use `(d|data).(f|formData):`;
 *
 * q|query => query for GET and DELETE;
 *
 * path => dynamic parameters in url, like: vehicle/tips/vehicleBaseInfo/{vin};
 *
 * eg.:
 *
 * import APIS from '@/api/XXX';
 *
 * APIS.testRequestUrlMethod(majorParams: Record<string, any>, otherParams?: Record<string, any>)
 *
 * If `majorParams` is array, and at the same time, you have to pass other params, you should use second param `otherParams`.
 *
 * POST:
 *    - `POST tipscase/save d:*`;
 *        equal: (params: unknown) => api.post<RoleListItem>({ url: baseUrl + 'tipscase/save', params }, true)
 *
 *    - `POST static-files d:sourceType,systemType,fileName,file,remark`;
 *        equal: (types: string[]) => api.post<Record<string, DictionaryItem[]>>({ url: baseUrl + 'static-files', params: types })
 *
 *    - `POST tipscase/save q:a,b,c`; => POST case-dict/search-types?a=[value of otherParams[a]]
 *        equal: (params: unknown) => api.post({ url: baseUrl + 'tipscase/save', params })
 *
 *    - `POST case-dict/search-types [d] q:a` => POST case-dict/search-types?a=[value of otherParams[a]] and taking majorParams as data
 *        equal: (types: string[]) => api.post<Record<string, DictionaryItem[]>>({ url: baseUrl + 'case-dict/search-types' + '?=languageType=CN', params: types })
 *
 *    ! What final `data` is depends on the keys of `d:[keys]`
 *
 * GET:
 *    - `GET tipscase/getInitInfo q:symptomId` => GET tipscase/getInitInfo?symptomId=[value of majorParams[symptomId]]
 *        equal: (symptomId: string) => api.get({ url: baseUrl + 'tipscase/getInitInfo' + symptomId })
 *
 *    - `GET tipscase/get/{id} path:id` => GET tipscase/get/[value of majorParams[id]]
 *        equal: (id: string) => api.get({ url: baseUrl + 'tipscase/get/' + id })
 * */

enum apis {
  getTableList = 'GET api query:results,page,size',
}

export default generatorAPIS<typeof apis>(apis);
