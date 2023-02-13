/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';
export const SPEC_VERSION = 'v1';
export interface AuthorizationSettingsDto {
  isLockoutEnabled?: boolean;
  defaultAccountLockoutSeconds?: number;
  maxFailedAccessAttemptsBeforeLockout?: number;
  requireDigit?: boolean;
  requireLowercase?: boolean;
  requireNonAlphanumeric?: boolean;
  requireUppercase?: boolean;
  requiredLength?: number;
  autoLogoffTimeout?: number;
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

export interface AuthorizationSettingsDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: AuthorizationSettingsDto;
}

export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

export interface AuthorizationSettingsUpdateSettingsQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type AuthorizationSettingsUpdateSettingsProps = Omit<
  MutateProps<void, unknown, AuthorizationSettingsUpdateSettingsQueryParams, AuthorizationSettingsDto, void>,
  'path' | 'verb'
>;

export const AuthorizationSettingsUpdateSettings = (props: AuthorizationSettingsUpdateSettingsProps) => (
  <Mutate<void, unknown, AuthorizationSettingsUpdateSettingsQueryParams, AuthorizationSettingsDto, void>
    verb="PUT"
    path={`/api/services/app/AuthorizationSettings/UpdateSettings`}
    {...props}
  />
);

export type UseAuthorizationSettingsUpdateSettingsProps = Omit<
  UseMutateProps<void, unknown, AuthorizationSettingsUpdateSettingsQueryParams, AuthorizationSettingsDto, void>,
  'path' | 'verb'
>;

export const useAuthorizationSettingsUpdateSettings = (props: UseAuthorizationSettingsUpdateSettingsProps) =>
  useMutate<void, unknown, AuthorizationSettingsUpdateSettingsQueryParams, AuthorizationSettingsDto, void>(
    'PUT',
    `/api/services/app/AuthorizationSettings/UpdateSettings`,
    props
  );

export interface AuthorizationSettingsGetSettingsQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type AuthorizationSettingsGetSettingsProps = Omit<
  GetProps<AuthorizationSettingsDtoAjaxResponse, AjaxResponseBase, AuthorizationSettingsGetSettingsQueryParams, void>,
  'path'
>;

export const AuthorizationSettingsGetSettings = (props: AuthorizationSettingsGetSettingsProps) => (
  <Get<AuthorizationSettingsDtoAjaxResponse, AjaxResponseBase, AuthorizationSettingsGetSettingsQueryParams, void>
    path={`/api/services/app/AuthorizationSettings/GetSettings`}
    {...props}
  />
);

export type UseAuthorizationSettingsGetSettingsProps = Omit<
  UseGetProps<
    AuthorizationSettingsDtoAjaxResponse,
    AjaxResponseBase,
    AuthorizationSettingsGetSettingsQueryParams,
    void
  >,
  'path'
>;

export const useAuthorizationSettingsGetSettings = (props: UseAuthorizationSettingsGetSettingsProps) =>
  useGet<AuthorizationSettingsDtoAjaxResponse, AjaxResponseBase, AuthorizationSettingsGetSettingsQueryParams, void>(
    `/api/services/app/AuthorizationSettings/GetSettings`,
    props
  );