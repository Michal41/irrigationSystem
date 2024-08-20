import { ServiceResponse } from '../../../types'

export interface PostPreferencesParams {}

export const postPreferencesService = async (
  params: PostPreferencesParams
): Promise<ServiceResponse<string>> => {
  return {
    success: true,
    result: ''
  }
}
