/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { BusinessProblemDetails } from '../model/models';
import { CreateFuelRequest } from '../model/models';
import { CreatedFuelResponse } from '../model/models';
import { GetAllFuelResponse } from '../model/models';
import { GetFuelByIdResponse } from '../model/models';
import { UpdateFuelRequest } from '../model/models';
import { UpdateFuelResponse } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface CreateFuelRequestParams {
    createFuelRequest: CreateFuelRequest;
}

export interface GetFuelByIdRequestParams {
    id: number;
}

export interface UpdateFuelByIdRequestParams {
    id: number;
    updateFuelRequest: UpdateFuelRequest;
}


export interface FuelsControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
* @param requestParameters
     */
    createFuel(requestParameters: CreateFuelRequestParams, extraHttpRequestParams?: any): Observable<CreatedFuelResponse>;

    /**
     * 
     * 
*/
    getAllFuels(extraHttpRequestParams?: any): Observable<Array<GetAllFuelResponse>>;

    /**
     * 
     * 
* @param requestParameters
     */
    getFuelById(requestParameters: GetFuelByIdRequestParams, extraHttpRequestParams?: any): Observable<GetFuelByIdResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    updateFuelById(requestParameters: UpdateFuelByIdRequestParams, extraHttpRequestParams?: any): Observable<UpdateFuelResponse>;

}
