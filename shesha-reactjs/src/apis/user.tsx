/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';

import * as RestfulShesha from '../utils/fetchers';
export const SPEC_VERSION = 'v1';
export interface CreateUserDto {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive?: boolean;
  roleNames?: string[] | null;
  password: string;
}

export interface UserDto {
  id?: number;
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive?: boolean;
  fullName?: string | null;
  lastLoginTime?: string | null;
  creationTime?: string;
  roleNames?: string[] | null;
}

export interface ValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface ErrorInfo {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
}

export interface UserDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: UserDto;
}

export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

export interface RoleDto {
  id?: number;
  name: string;
  displayName: string;
  normalizedName?: string | null;
  description?: string | null;
  grantedPermissions?: string[] | null;
}

export interface RoleDtoListResultDto {
  items?: RoleDto[] | null;
}

export interface RoleDtoListResultDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: RoleDtoListResultDto;
}

export interface ChangeUserLanguageDto {
  languageName: string;
}

export interface ResetPasswordSendOtpResponse {
  /**
   * Unique runtime identifier of the operation. Is used for resending
   */
  operationId?: string;
}

export interface ResetPasswordSendOtpResponseAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: ResetPasswordSendOtpResponse;
}

export interface ResetPasswordVerifyOtpInput {
  /**
   * Unique runtime identifier of the operation. Is used for resending
   */
  operationId?: string;
  /**
   * Value of the One Time Pin
   */
  pin?: string | null;
  mobileNo: string;
}

export interface ResetPasswordVerifyOtpResponse {
  /**
   * Indicates that the OTP matches to the sent one
   */
  isSuccess?: boolean;
  /**
   * Error message
   */
  errorMessage?: string | null;
  token?: string | null;
  username?: string | null;
}

export interface ResetPasswordVerifyOtpResponseAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: ResetPasswordVerifyOtpResponse;
}

export interface ResetPasswordUsingTokenInput {
  username: string;
  token: string;
  newPassword: string;
}

export interface BooleanAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: boolean;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export interface ResetPasswordDto {
  adminPassword: string;
  userId: number;
  newPassword: string;
}

export interface AbpUserAuthConfigDto {
  allPermissions?: {
    [key: string]: string;
  } | null;
  grantedPermissions?: {
    [key: string]: string;
  } | null;
}

export interface AbpUserAuthConfigDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: AbpUserAuthConfigDto;
}

export interface UserDtoPagedResultDto {
  items?: UserDto[] | null;
  totalCount?: number;
}

export interface UserDtoPagedResultDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: UserDtoPagedResultDto;
}

export type UserCreateProps = Omit<
  MutateProps<UserDtoAjaxResponse, AjaxResponseBase, void, CreateUserDto, void>,
  'path' | 'verb'
>;

export const UserCreate = (props: UserCreateProps) => (
  <Mutate<UserDtoAjaxResponse, AjaxResponseBase, void, CreateUserDto, void>
    verb="POST"
    path={`/api/services/app/User/Create`}
    {...props}
  />
);

export type UseUserCreateProps = Omit<
  UseMutateProps<UserDtoAjaxResponse, AjaxResponseBase, void, CreateUserDto, void>,
  'path' | 'verb'
>;

export const useUserCreate = (props: UseUserCreateProps) =>
  useMutate<UserDtoAjaxResponse, AjaxResponseBase, void, CreateUserDto, void>(
    'POST',
    `/api/services/app/User/Create`,
    props
  );

export type userCreateProps = Omit<
  RestfulShesha.MutateProps<UserDtoAjaxResponse, AjaxResponseBase, void, CreateUserDto, void>,
  'data'
>;
export const userCreate = (data: CreateUserDto, props: userCreateProps) =>
  RestfulShesha.mutate<UserDtoAjaxResponse, AjaxResponseBase, void, CreateUserDto, void>(
    'POST',
    `/api/services/app/User/Create`,
    data,
    props
  );

export type UserUpdateProps = Omit<
  MutateProps<UserDtoAjaxResponse, AjaxResponseBase, void, UserDto, void>,
  'path' | 'verb'
>;

export const UserUpdate = (props: UserUpdateProps) => (
  <Mutate<UserDtoAjaxResponse, AjaxResponseBase, void, UserDto, void>
    verb="PUT"
    path={`/api/services/app/User/Update`}
    {...props}
  />
);

export type UseUserUpdateProps = Omit<
  UseMutateProps<UserDtoAjaxResponse, AjaxResponseBase, void, UserDto, void>,
  'path' | 'verb'
>;

export const useUserUpdate = (props: UseUserUpdateProps) =>
  useMutate<UserDtoAjaxResponse, AjaxResponseBase, void, UserDto, void>('PUT', `/api/services/app/User/Update`, props);

export type userUpdateProps = Omit<
  RestfulShesha.MutateProps<UserDtoAjaxResponse, AjaxResponseBase, void, UserDto, void>,
  'data'
>;
export const userUpdate = (data: UserDto, props: userUpdateProps) =>
  RestfulShesha.mutate<UserDtoAjaxResponse, AjaxResponseBase, void, UserDto, void>(
    'PUT',
    `/api/services/app/User/Update`,
    data,
    props
  );

export interface UserDeleteQueryParams {
  id?: number;
}

export type UserDeleteProps = Omit<MutateProps<void, unknown, UserDeleteQueryParams, void, void>, 'path' | 'verb'>;

export const UserDelete = (props: UserDeleteProps) => (
  <Mutate<void, unknown, UserDeleteQueryParams, void, void>
    verb="DELETE"
    path={`/api/services/app/User/Delete`}
    {...props}
  />
);

export type UseUserDeleteProps = Omit<
  UseMutateProps<void, unknown, UserDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

export const useUserDelete = (props: UseUserDeleteProps) =>
  useMutate<void, unknown, UserDeleteQueryParams, void, void>('DELETE', `/api/services/app/User/Delete`, { ...props });

export type userDeleteProps = Omit<RestfulShesha.MutateProps<void, unknown, UserDeleteQueryParams, void, void>, 'data'>;
export const userDelete = (props: userDeleteProps) =>
  RestfulShesha.mutate<void, unknown, UserDeleteQueryParams, void, void>(
    'DELETE',
    `/api/services/app/User/Delete`,
    undefined,
    props
  );

export type UserGetRolesProps = Omit<GetProps<RoleDtoListResultDtoAjaxResponse, AjaxResponseBase, void, void>, 'path'>;

export const UserGetRoles = (props: UserGetRolesProps) => (
  <Get<RoleDtoListResultDtoAjaxResponse, AjaxResponseBase, void, void>
    path={`/api/services/app/User/GetRoles`}
    {...props}
  />
);

export type UseUserGetRolesProps = Omit<
  UseGetProps<RoleDtoListResultDtoAjaxResponse, AjaxResponseBase, void, void>,
  'path'
>;

export const useUserGetRoles = (props: UseUserGetRolesProps) =>
  useGet<RoleDtoListResultDtoAjaxResponse, AjaxResponseBase, void, void>(`/api/services/app/User/GetRoles`, props);

export type userGetRolesProps = Omit<
  RestfulShesha.GetProps<RoleDtoListResultDtoAjaxResponse, AjaxResponseBase, void, void>,
  'queryParams'
>;
export const userGetRoles = (props: userGetRolesProps) =>
  RestfulShesha.get<RoleDtoListResultDtoAjaxResponse, AjaxResponseBase, void, void>(
    `/api/services/app/User/GetRoles`,
    undefined,
    props
  );

export type UserChangeLanguageProps = Omit<
  MutateProps<void, unknown, void, ChangeUserLanguageDto, void>,
  'path' | 'verb'
>;

export const UserChangeLanguage = (props: UserChangeLanguageProps) => (
  <Mutate<void, unknown, void, ChangeUserLanguageDto, void>
    verb="POST"
    path={`/api/services/app/User/ChangeLanguage`}
    {...props}
  />
);

export type UseUserChangeLanguageProps = Omit<
  UseMutateProps<void, unknown, void, ChangeUserLanguageDto, void>,
  'path' | 'verb'
>;

export const useUserChangeLanguage = (props: UseUserChangeLanguageProps) =>
  useMutate<void, unknown, void, ChangeUserLanguageDto, void>('POST', `/api/services/app/User/ChangeLanguage`, props);

export type userChangeLanguageProps = Omit<
  RestfulShesha.MutateProps<void, unknown, void, ChangeUserLanguageDto, void>,
  'data'
>;
export const userChangeLanguage = (data: ChangeUserLanguageDto, props: userChangeLanguageProps) =>
  RestfulShesha.mutate<void, unknown, void, ChangeUserLanguageDto, void>(
    'POST',
    `/api/services/app/User/ChangeLanguage`,
    data,
    props
  );

export interface UserResetPasswordSendOtpQueryParams {
  /**
   * mobile number of the user
   */
  mobileNo?: string | null;
}

export type UserResetPasswordSendOtpProps = Omit<
  MutateProps<
    ResetPasswordSendOtpResponseAjaxResponse,
    AjaxResponseBase,
    UserResetPasswordSendOtpQueryParams,
    void,
    void
  >,
  'path' | 'verb'
>;

/**
 * Send One-time pin for password reset
 */
export const UserResetPasswordSendOtp = (props: UserResetPasswordSendOtpProps) => (
  <Mutate<ResetPasswordSendOtpResponseAjaxResponse, AjaxResponseBase, UserResetPasswordSendOtpQueryParams, void, void>
    verb="POST"
    path={`/api/services/app/User/ResetPasswordSendOtp`}
    {...props}
  />
);

export type UseUserResetPasswordSendOtpProps = Omit<
  UseMutateProps<
    ResetPasswordSendOtpResponseAjaxResponse,
    AjaxResponseBase,
    UserResetPasswordSendOtpQueryParams,
    void,
    void
  >,
  'path' | 'verb'
>;

/**
 * Send One-time pin for password reset
 */
export const useUserResetPasswordSendOtp = (props: UseUserResetPasswordSendOtpProps) =>
  useMutate<
    ResetPasswordSendOtpResponseAjaxResponse,
    AjaxResponseBase,
    UserResetPasswordSendOtpQueryParams,
    void,
    void
  >('POST', `/api/services/app/User/ResetPasswordSendOtp`, props);

export type userResetPasswordSendOtpProps = Omit<
  RestfulShesha.MutateProps<
    ResetPasswordSendOtpResponseAjaxResponse,
    AjaxResponseBase,
    UserResetPasswordSendOtpQueryParams,
    void,
    void
  >,
  'data'
>;
/**
 * Send One-time pin for password reset
 */
export const userResetPasswordSendOtp = (props: userResetPasswordSendOtpProps) =>
  RestfulShesha.mutate<
    ResetPasswordSendOtpResponseAjaxResponse,
    AjaxResponseBase,
    UserResetPasswordSendOtpQueryParams,
    void,
    void
  >('POST', `/api/services/app/User/ResetPasswordSendOtp`, undefined, props);

export type UserResetPasswordVerifyOtpProps = Omit<
  MutateProps<ResetPasswordVerifyOtpResponseAjaxResponse, AjaxResponseBase, void, ResetPasswordVerifyOtpInput, void>,
  'path' | 'verb'
>;

/**
 * Verify one-time pin that was used for password reset. Returns a token that should be used for password update
 */
export const UserResetPasswordVerifyOtp = (props: UserResetPasswordVerifyOtpProps) => (
  <Mutate<ResetPasswordVerifyOtpResponseAjaxResponse, AjaxResponseBase, void, ResetPasswordVerifyOtpInput, void>
    verb="POST"
    path={`/api/services/app/User/ResetPasswordVerifyOtp`}
    {...props}
  />
);

export type UseUserResetPasswordVerifyOtpProps = Omit<
  UseMutateProps<ResetPasswordVerifyOtpResponseAjaxResponse, AjaxResponseBase, void, ResetPasswordVerifyOtpInput, void>,
  'path' | 'verb'
>;

/**
 * Verify one-time pin that was used for password reset. Returns a token that should be used for password update
 */
export const useUserResetPasswordVerifyOtp = (props: UseUserResetPasswordVerifyOtpProps) =>
  useMutate<ResetPasswordVerifyOtpResponseAjaxResponse, AjaxResponseBase, void, ResetPasswordVerifyOtpInput, void>(
    'POST',
    `/api/services/app/User/ResetPasswordVerifyOtp`,
    props
  );

export type userResetPasswordVerifyOtpProps = Omit<
  RestfulShesha.MutateProps<
    ResetPasswordVerifyOtpResponseAjaxResponse,
    AjaxResponseBase,
    void,
    ResetPasswordVerifyOtpInput,
    void
  >,
  'data'
>;
/**
 * Verify one-time pin that was used for password reset. Returns a token that should be used for password update
 */
export const userResetPasswordVerifyOtp = (data: ResetPasswordVerifyOtpInput, props: userResetPasswordVerifyOtpProps) =>
  RestfulShesha.mutate<
    ResetPasswordVerifyOtpResponseAjaxResponse,
    AjaxResponseBase,
    void,
    ResetPasswordVerifyOtpInput,
    void
  >('POST', `/api/services/app/User/ResetPasswordVerifyOtp`, data, props);

export type UserResetPasswordUsingTokenProps = Omit<
  MutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordUsingTokenInput, void>,
  'path' | 'verb'
>;

/**
 * Resets a password of the user using token
 */
export const UserResetPasswordUsingToken = (props: UserResetPasswordUsingTokenProps) => (
  <Mutate<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordUsingTokenInput, void>
    verb="POST"
    path={`/api/services/app/User/ResetPasswordUsingToken`}
    {...props}
  />
);

export type UseUserResetPasswordUsingTokenProps = Omit<
  UseMutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordUsingTokenInput, void>,
  'path' | 'verb'
>;

/**
 * Resets a password of the user using token
 */
export const useUserResetPasswordUsingToken = (props: UseUserResetPasswordUsingTokenProps) =>
  useMutate<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordUsingTokenInput, void>(
    'POST',
    `/api/services/app/User/ResetPasswordUsingToken`,
    props
  );

export type userResetPasswordUsingTokenProps = Omit<
  RestfulShesha.MutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordUsingTokenInput, void>,
  'data'
>;
/**
 * Resets a password of the user using token
 */
export const userResetPasswordUsingToken = (
  data: ResetPasswordUsingTokenInput,
  props: userResetPasswordUsingTokenProps
) =>
  RestfulShesha.mutate<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordUsingTokenInput, void>(
    'POST',
    `/api/services/app/User/ResetPasswordUsingToken`,
    data,
    props
  );

export type UserChangePasswordProps = Omit<
  MutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ChangePasswordDto, void>,
  'path' | 'verb'
>;

export const UserChangePassword = (props: UserChangePasswordProps) => (
  <Mutate<BooleanAjaxResponse, AjaxResponseBase, void, ChangePasswordDto, void>
    verb="POST"
    path={`/api/services/app/User/ChangePassword`}
    {...props}
  />
);

export type UseUserChangePasswordProps = Omit<
  UseMutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ChangePasswordDto, void>,
  'path' | 'verb'
>;

export const useUserChangePassword = (props: UseUserChangePasswordProps) =>
  useMutate<BooleanAjaxResponse, AjaxResponseBase, void, ChangePasswordDto, void>(
    'POST',
    `/api/services/app/User/ChangePassword`,
    props
  );

export type userChangePasswordProps = Omit<
  RestfulShesha.MutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ChangePasswordDto, void>,
  'data'
>;
export const userChangePassword = (data: ChangePasswordDto, props: userChangePasswordProps) =>
  RestfulShesha.mutate<BooleanAjaxResponse, AjaxResponseBase, void, ChangePasswordDto, void>(
    'POST',
    `/api/services/app/User/ChangePassword`,
    data,
    props
  );

export type UserResetPasswordProps = Omit<
  MutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordDto, void>,
  'path' | 'verb'
>;

export const UserResetPassword = (props: UserResetPasswordProps) => (
  <Mutate<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordDto, void>
    verb="POST"
    path={`/api/services/app/User/ResetPassword`}
    {...props}
  />
);

export type UseUserResetPasswordProps = Omit<
  UseMutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordDto, void>,
  'path' | 'verb'
>;

export const useUserResetPassword = (props: UseUserResetPasswordProps) =>
  useMutate<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordDto, void>(
    'POST',
    `/api/services/app/User/ResetPassword`,
    props
  );

export type userResetPasswordProps = Omit<
  RestfulShesha.MutateProps<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordDto, void>,
  'data'
>;
export const userResetPassword = (data: ResetPasswordDto, props: userResetPasswordProps) =>
  RestfulShesha.mutate<BooleanAjaxResponse, AjaxResponseBase, void, ResetPasswordDto, void>(
    'POST',
    `/api/services/app/User/ResetPassword`,
    data,
    props
  );

export type UserGetUserAuthConfigProps = Omit<
  GetProps<AbpUserAuthConfigDtoAjaxResponse, AjaxResponseBase, void, void>,
  'path'
>;

export const UserGetUserAuthConfig = (props: UserGetUserAuthConfigProps) => (
  <Get<AbpUserAuthConfigDtoAjaxResponse, AjaxResponseBase, void, void>
    path={`/api/services/app/User/GetUserAuthConfig`}
    {...props}
  />
);

export type UseUserGetUserAuthConfigProps = Omit<
  UseGetProps<AbpUserAuthConfigDtoAjaxResponse, AjaxResponseBase, void, void>,
  'path'
>;

export const useUserGetUserAuthConfig = (props: UseUserGetUserAuthConfigProps) =>
  useGet<AbpUserAuthConfigDtoAjaxResponse, AjaxResponseBase, void, void>(
    `/api/services/app/User/GetUserAuthConfig`,
    props
  );

export type userGetUserAuthConfigProps = Omit<
  RestfulShesha.GetProps<AbpUserAuthConfigDtoAjaxResponse, AjaxResponseBase, void, void>,
  'queryParams'
>;
export const userGetUserAuthConfig = (props: userGetUserAuthConfigProps) =>
  RestfulShesha.get<AbpUserAuthConfigDtoAjaxResponse, AjaxResponseBase, void, void>(
    `/api/services/app/User/GetUserAuthConfig`,
    undefined,
    props
  );

export interface UserGetQueryParams {
  id?: number;
}

export type UserGetProps = Omit<GetProps<UserDtoAjaxResponse, AjaxResponseBase, UserGetQueryParams, void>, 'path'>;

export const UserGet = (props: UserGetProps) => (
  <Get<UserDtoAjaxResponse, AjaxResponseBase, UserGetQueryParams, void>
    path={`/api/services/app/User/Get`}
    {...props}
  />
);

export type UseUserGetProps = Omit<
  UseGetProps<UserDtoAjaxResponse, AjaxResponseBase, UserGetQueryParams, void>,
  'path'
>;

export const useUserGet = (props: UseUserGetProps) =>
  useGet<UserDtoAjaxResponse, AjaxResponseBase, UserGetQueryParams, void>(`/api/services/app/User/Get`, props);

export type userGetProps = Omit<
  RestfulShesha.GetProps<UserDtoAjaxResponse, AjaxResponseBase, UserGetQueryParams, void>,
  'queryParams'
>;
export const userGet = (queryParams: UserGetQueryParams, props: userGetProps) =>
  RestfulShesha.get<UserDtoAjaxResponse, AjaxResponseBase, UserGetQueryParams, void>(
    `/api/services/app/User/Get`,
    queryParams,
    props
  );

export interface UserGetAllQueryParams {
  keyword?: string | null;
  isActive?: boolean | null;
  skipCount?: number;
  maxResultCount?: number;
}

export type UserGetAllProps = Omit<
  GetProps<UserDtoPagedResultDtoAjaxResponse, AjaxResponseBase, UserGetAllQueryParams, void>,
  'path'
>;

export const UserGetAll = (props: UserGetAllProps) => (
  <Get<UserDtoPagedResultDtoAjaxResponse, AjaxResponseBase, UserGetAllQueryParams, void>
    path={`/api/services/app/User/GetAll`}
    {...props}
  />
);

export type UseUserGetAllProps = Omit<
  UseGetProps<UserDtoPagedResultDtoAjaxResponse, AjaxResponseBase, UserGetAllQueryParams, void>,
  'path'
>;

export const useUserGetAll = (props: UseUserGetAllProps) =>
  useGet<UserDtoPagedResultDtoAjaxResponse, AjaxResponseBase, UserGetAllQueryParams, void>(
    `/api/services/app/User/GetAll`,
    props
  );

export type userGetAllProps = Omit<
  RestfulShesha.GetProps<UserDtoPagedResultDtoAjaxResponse, AjaxResponseBase, UserGetAllQueryParams, void>,
  'queryParams'
>;
export const userGetAll = (queryParams: UserGetAllQueryParams, props: userGetAllProps) =>
  RestfulShesha.get<UserDtoPagedResultDtoAjaxResponse, AjaxResponseBase, UserGetAllQueryParams, void>(
    `/api/services/app/User/GetAll`,
    queryParams,
    props
  );