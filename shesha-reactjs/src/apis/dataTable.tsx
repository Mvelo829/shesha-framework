/* Generated by restful-react */

import React from 'react';
import { Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';

import * as RestfulShesha from '../utils/fetchers';
export const SPEC_VERSION = 'v1';
export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

/**
 * Datatable column DTO
 */
export interface DataTableColumnDto {
  /**
   * Name of the property in the model
   */
  propertyName?: string | null;
  /**
   * Column name
   */
  name?: string | null;
  /**
   * Caption
   */
  caption?: string | null;
  /**
   * Description
   */
  description?: string | null;
  allowShowHide?: boolean;
  /**
   * Data type
   */
  dataType?: string | null;
  /**
   * Custom data type
   */
  customDataType?: string | null;
  /**
   * Reference list name
   */
  referenceListName?: string | null;
  /**
   * Reference list namespace
   */
  referenceListNamespace?: string | null;
  /**
   * Entity type short alias
   */
  entityReferenceTypeShortAlias?: string | null;
  /**
   * Autocomplete url
   */
  autocompleteUrl?: string | null;
  /**
   * Allow selection of inherited entities, is used in pair with <seealso cref="P:Shesha.DataTables.DataTableColumnDto.AutocompleteUrl" />
   */
  allowInherited?: boolean;
  /**
   * Indicates is column visible or not
   */
  isVisible?: boolean;
  /**
   * Indicates is column filterable or not
   */
  isFilterable?: boolean;
  /**
   * Indicates is column sortable or not
   */
  isSortable?: boolean;
  /**
   * If true, indicates that column is editable
   */
  isEditable?: boolean;
  /**
   * Column width
   */
  width?: string | null;
  defaultSorting?: ListSortDirection;
  /**
   * Indicates is column visible or not
   */
  visible?: boolean;
}

export interface DataTableColumnDtoListAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: DataTableColumnDto[] | null;
}

export interface ErrorInfo {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
}

/**
 * Get datatable columns input. Is used for tables with configurable columns
 */
export interface GetColumnsInput {
  /**
   * Type of entity
   */
  entityType: string;
  /**
   * List of property names
   */
  properties?: string[] | null;
}

export type ListSortDirection = 0 | 1;

export interface ValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface DataTableGetColumnsQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type DataTableGetColumnsProps = Omit<
  MutateProps<
    DataTableColumnDtoListAjaxResponse,
    AjaxResponseBase,
    DataTableGetColumnsQueryParams,
    GetColumnsInput,
    void
  >,
  'path' | 'verb'
>;

/**
 * Returns datatable columns for configurable table. Accepts type of model(entity) and list of properties.
 * Columns configuration is merged on the client side with configurable values
 */
export const DataTableGetColumns = (props: DataTableGetColumnsProps) => (
  <Mutate<DataTableColumnDtoListAjaxResponse, AjaxResponseBase, DataTableGetColumnsQueryParams, GetColumnsInput, void>
    verb="POST"
    path={`/api/services/app/DataTable/GetColumns`}
    {...props}
  />
);

export type UseDataTableGetColumnsProps = Omit<
  UseMutateProps<
    DataTableColumnDtoListAjaxResponse,
    AjaxResponseBase,
    DataTableGetColumnsQueryParams,
    GetColumnsInput,
    void
  >,
  'path' | 'verb'
>;

/**
 * Returns datatable columns for configurable table. Accepts type of model(entity) and list of properties.
 * Columns configuration is merged on the client side with configurable values
 */
export const useDataTableGetColumns = (props: UseDataTableGetColumnsProps) =>
  useMutate<
    DataTableColumnDtoListAjaxResponse,
    AjaxResponseBase,
    DataTableGetColumnsQueryParams,
    GetColumnsInput,
    void
  >('POST', `/api/services/app/DataTable/GetColumns`, props);

export type dataTableGetColumnsProps = Omit<
  RestfulShesha.MutateProps<
    DataTableColumnDtoListAjaxResponse,
    AjaxResponseBase,
    DataTableGetColumnsQueryParams,
    GetColumnsInput,
    void
  >,
  'data'
>;
/**
 * Returns datatable columns for configurable table. Accepts type of model(entity) and list of properties.
 * Columns configuration is merged on the client side with configurable values
 */
export const dataTableGetColumns = (data: GetColumnsInput, props: dataTableGetColumnsProps) =>
  RestfulShesha.mutate<
    DataTableColumnDtoListAjaxResponse,
    AjaxResponseBase,
    DataTableGetColumnsQueryParams,
    GetColumnsInput,
    void
  >('POST', `/api/services/app/DataTable/GetColumns`, data, props);