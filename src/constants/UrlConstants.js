export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const AUTH_URLS = {
  LOGIN_URL: `${BASE_URL}auth/login/`,
  FORGOT_PASSWORD_URL: `${BASE_URL}auth/forget-password/`,
  VERIFY_OTP_URL: `${BASE_URL}auth/verify-otp/`,
  RESEND_OTP_URL: `${BASE_URL}auth/resend-otp/`,
  RESET_PASSWORD_URL: `${BASE_URL}auth/reset-password`,
  SET_PASSWORD_URL: `${BASE_URL}auth/set-password`,
};

export const HEADER_URLS = {
  LOGGED_USER_DETAILS_URL: `${BASE_URL}user/profile`,
  UPLOAD_PROFILE_PICTURE: `${BASE_URL}user/upload/profile-picture/`,
  DELETE_PROFILE_PICTURE: `${BASE_URL}user/profile-picture`,
  CHANGE_PASSWORD_URL: `${BASE_URL}auth/change-password/`,
  LOGOUT_URL: `${BASE_URL}auth/logout/`,
  HEADER_NOTIFICATIONS: {
    GET_HEADER_NOTIFICATION_LIST_URL: `${BASE_URL}notification/list/`,
    MARK_AS_READ_NOTIFICATION_URL: `${BASE_URL}notification/markAsRead/`,
    MARK_ALL_NOTIFICATIONS_AS_READ: `${BASE_URL}notification/markAllAsRead/`,
  },
  HEADER_GLOBAL_SEARCH: `${BASE_URL}search/`,
};

export const DASHBOARD_URLS = {
  DASHBOARD_DETAILS: `${BASE_URL}dashboard/`,
  DASHBOARD_TASK_LIST: `${BASE_URL}task/`,
  DASHBOARD_TASK_DETAILS_URL: `${BASE_URL}task/details/`,
  DASHBOARD_NOTIFICATION_LIST: `${BASE_URL}notification/`,
  UPDATE_TASK: `${BASE_URL}task/`,
  SEARCH_ENTITIES: `${BASE_URL}entity-search/`,
  DASHBOARD_DOWNLOAD_TASK: `${BASE_URL}/task/download`,
};

export const APPLICATION_URLS = {
  APPLICATION_LIST_URL: `${BASE_URL}application/`,
  APPLICATION_COLUMN_NAME_LIST_URL: `${BASE_URL}application/column-name?columnFor=application`,
  APPLICATION_COLUMN_NAME_LIST_UPDATE_URL: `${BASE_URL}application/column-name/`,
  APPLICATION_SAVE_STEP_DATA: `${BASE_URL}application/`,
  APPLICATION_FILTER_LIST_URL: `${BASE_URL}application/entity-list`,
  GET_APPLICATION_DETAILS_URL: `${BASE_URL}application/details/`,
  DOWNLOAD_APPLICATION: `${BASE_URL}application/download`,

  COMPANY: {
    DROP_DOWN_DATA_URL: `${BASE_URL}application/entity-list/`,
    SEARCH_APPLICATION_BY_DEBTOR_DETAILS: `${BASE_URL}debtor/details/`,
    SEARCH_APPLICATION_BY_ABN_ACN_DETAILS: `${BASE_URL}application/search-entity/`,
    SEARCH_APPLICATION_ENTITY_TYPE: `${BASE_URL}application/search-entity-list/`,
    DELETE_APPLICATION_ENTITY_TYPE: `${BASE_URL}debtor/stakeholder/`,
    GENERATE_RANDOM_REGISTRATION_NUMBER: `${BASE_URL}debtor/generate/registration-number`,
  },
  DOCUMENTS: {
    DOCUMENTS_LIST: `${BASE_URL}document/`,
    GET_DOCUMENT_TYPE_LIST_URL: `${BASE_URL}document/type-list`,
    UPLOAD_DOCUMENT_URL: `${BASE_URL}document/upload/`,
    APPLICATION_DELETE_DOCUMENT: `${BASE_URL}document/`,
  },

  // View Application
  VIEW_APPLICATION: {
    CHANGE_APPLICATION_STATUS: `${BASE_URL}application/`,
    DOWNLOAD_APPLICATION_DECISION_LETTER: `${BASE_URL}application/download/decision-letter/`,
    APPLICATION_TASK: {
      GET_TASK_LIST: `${BASE_URL}task/`,
      ASSIGNEE_DROP_DOWN_DATA: `${BASE_URL}task/user-list/`,
      ENTITY_DROP_DOWN_DATA: `${BASE_URL}task/entity-list/`,
      GET_APPLICATION_TASK_DETAIL: `${BASE_URL}task/details/`,
      SAVE_NEW_TASK: `${BASE_URL}task/`,
    },
    DOWNLOAD_DOCUMENTS_URL: `${BASE_URL}document/download`,
    APPLICATION_MODULES: {
      GET_MODULE_LIST: `${BASE_URL}application/modules/`,
      UPLOAD_DOCUMENT_URL: `${BASE_URL}document/upload/`,
      DELETE_DOCUMENT_URL: `${BASE_URL}document/`,
    },
    APPLICATION_NOTES: {
      GET_NOTES_LIST: `${BASE_URL}note/`,
    },
  },
};

export const ALERTS_URLS = {
  GET_ALERTS_LIST: `${BASE_URL}alerts`,
  GET_ALERTS_COLUMN_LIST: `${BASE_URL}alerts/column-name`,
  UPDATE_ALERTS_COLUMN_LIST: `${BASE_URL}alerts/column-name`,
  GET_ALERT_CLIENT_LIST: `${BASE_URL}alerts/entity-list`,
  DOWNLOAD_ALERT: `${BASE_URL}alerts/download`,
  GET_ALERT_FILTER_DATA: `${BASE_URL}alerts/alert-entity-list`,
  GET_ALERT_DETAIL: `${BASE_URL}alerts/detail/`,
  UPDATE_ALERT_STATUS: `${BASE_URL}alerts/detail/`,
};

export const DEBTORS_URLS = {
  DEBTORS_LIST_URL: `${BASE_URL}debtor/`,
  DEBTORS_COLUMNS_NAME_LIST_URL: `${BASE_URL}debtor/column-name/`,
  SELECTED_DEBTOR_DETAILS_BY_ID_URL: `${BASE_URL}debtor/`,
  SELECTED_DEBTOR_DETAILS_URL: `${BASE_URL}debtor/details/`,
  DROP_DOWN_DATA_URL: `${BASE_URL}debtor/entity-list/`,
  DOWNLOAD_DEBTOR: `${BASE_URL}debtor/download/`,
  DEBTORS_SAVE_STEP_DATA: `${BASE_URL}debtor/generate/`,

  GLOBAL_DEBTORS_SEARCH: `${BASE_URL}debtor/global`,

  NOTES: {
    NOTES_LIST: `${BASE_URL}note/`,
  },
  DOCUMENTS: {
    DOCUMENTS_LIST: `${BASE_URL}document/`,
    COLUMN_NAME_LIST_URL: `${BASE_URL}document/column-name/`,
    GET_DOCUMENT_TYPE_URL: `${BASE_URL}document/type-list/`,
    UPLOAD_DOCUMENT_URL: `${BASE_URL}document/upload/`,
    DOWNLOAD_DOCUMENTS_URL: `${BASE_URL}document/download`,
  },
  TASK: {
    TASK_LIST_URL: `${BASE_URL}task/`,
    TASK_COLUMN_NAME_LIST_URL: `${BASE_URL}task/column-name`,
    ADD_TASK: {
      ASSIGNEE_DROP_DOWN_DATA: `${BASE_URL}task/user-list/`,
      ENTITY_DROP_DOWN_DATA: `${BASE_URL}task/entity-list/`,
      SAVE_NEW_TASK: `${BASE_URL}task/`,
    },
    EDIT_TASK: {
      GET_DEBTOR_TASK_DETAIL: `${BASE_URL}task/details/`,
    },
  },
  APPLICATION: {
    APPLICATION_LIST: `${BASE_URL}application/`,
    COLUMN_NAME_LIST_URL: `${BASE_URL}application/column-name/`,
    UPDATE_COLUMN_NAME_LIST_URL: `${BASE_URL}application/column-name/`,
    DOWNLOAD_APPLICATION_CSV: `${BASE_URL}application/download/`,
  },

  ALERTS: {
    ALERTS_LIST: `${BASE_URL}debtor/alert-list/`,
    ALERTS_DETAILS: `${BASE_URL}debtor/alert/`,
  },
  CREDIT_LIMIT: {
    CREDIT_LIMIT_LIST: `${BASE_URL}debtor/credit-limit/`,
    COLUMN_NAME_LIST_URL: `${BASE_URL}debtor/column-name/`,
    UPDATE_COLUMN_NAME_LIST_URL: `${BASE_URL}debtor/column-name/`,
    CREDIT_LIMIT_ACTIONS: `${BASE_URL}debtor/credit-limit/`,
    DOWNLOAD_DEBTOR_CREDIT_LIMIT_CSV: `${BASE_URL}debtor/download/`,
    DOWNLOAD_DEBTOR_CREDIT_LIMIT_DECISION_LETTER: `${BASE_URL}debtor/download/decision-letter/`,
  },
  STAKE_HOLDER: {
    STAKE_HOLDER_LIST: `${BASE_URL}debtor/stakeholder/`,
    COLUMN_NAME_LIST_URL: `${BASE_URL}debtor/column-name/`,
    UPDATE_COLUMN_NAME_LIST_URL: `${BASE_URL}debtor/column-name/`,
    STAKE_HOLDER_CRUD: {
      GET_STAKE_HOLDER_DETAIL: `${BASE_URL}debtor/stakeholder-details/`,
      DROP_DOWN_DATA_URL: `${BASE_URL}debtor/entity-list/`,
      SEARCH_APPLICATION_BY_DEBTOR_DETAILS: `${BASE_URL}debtor/details/`,
      SEARCH_APPLICATION_BY_ABN_ACN_DETAILS: `${BASE_URL}debtor/search-entity/`,
      SEARCH_APPLICATION_ENTITY_TYPE: `${BASE_URL}debtor/search-entity-list/`,
      SAVE_NEW_STAKE_HOLDER: `${BASE_URL}debtor/stakeholder/`,
      DELETE_STAKE_HOLDER: `${BASE_URL}debtor/stakeholder/`,
    },
  },
  REPORTS: {
    DEBTOR_REPORTS_LIST: `${BASE_URL}credit-report/`,
    COLUMN_NAME_LIST_URL: `${BASE_URL}credit-report/column-name/`,
    UPDATE_COLUMN_NAME_LIST_URL: `${BASE_URL}credit-report/column-name/`,
    DEBTOR_REPORTS_LIST_FOR_FETCH: `${BASE_URL}credit-report/list/`,
    FETCH_SELECTED_REPORTS_FOR_DEBTOR: `${BASE_URL}credit-report/generate/`,
    DOWNLOAD_REPORTS_FOR_DEBTOR: `${BASE_URL}credit-report/download/`,
  },
  DEBTOR_OVERDUE: {
    GET_DEBTOR_OVERDUE_LIST: `${BASE_URL}overdue/`,
    GET_DEBTOR_OVERDUE_ENTITY_LIST: `${BASE_URL}overdue/entity-list/`,
  },
  COMPANY: {
    DROP_DOWN_DATA_URL: `${BASE_URL}debtor/entity-list/`,
    SEARCH_APPLICATION_BY_DEBTOR_DETAILS: `${BASE_URL}debtor/details/`,
    SEARCH_APPLICATION_BY_ABN_ACN_DETAILS: `${BASE_URL}application/search-entity/`,
    SEARCH_APPLICATION_ENTITY_TYPE: `${BASE_URL}application/search-entity-list/`,
    DELETE_APPLICATION_PERSONS: `${BASE_URL}debtor/stakeholder/`,
    GENERATE_RANDOM_REGISTRATION_NUMBER: `${BASE_URL}debtor/generate/registration-number`,
  },
};

export const CREDIT_LIMITS_URLS = {
  CREDIT_LIMITS_LIST_URL: `${BASE_URL}credit-limit/`,
  CREDIT_LIMITS_COLUMN_LIST: `${BASE_URL}credit-limit/column-name/`,
  CREDIT_LIMITS_FILTER: `${BASE_URL}credit-limit/entity-list/`,
  VIEW_CREDIT_LIMITS_DETAILS: `${BASE_URL}credit-limit/`,
  CREDIT_LIMIT_ACTIONS: `${BASE_URL}credit-limit/credit-limit/`,
  DOWNLOAD_CREDIT_LIMIT_CSV: `${BASE_URL}credit-limit/download/`,
  DOWNLOAD_DEBTOR_CREDIT_LIMIT_DECISION_LETTER: `${BASE_URL}credit-limit/download/decision-letter/`,

  APPLICATION: {
    APPLICATION_LIST: `${BASE_URL}application/`,
    COLUMN_NAME_LIST_URL: `${BASE_URL}application/column-name/`,
    UPDATE_COLUMN_NAME_LIST_URL: `${BASE_URL}application/column-name/`,
  },

  TASKS: {
    TASKS_LIST: `${BASE_URL}task/`,
    TASK_COLUMN_NAME_LIST_URL: `${BASE_URL}task/column-name`,
    ADD_TASK: {
      ASSIGNEE_DROP_DOWN_DATA: `${BASE_URL}task/user-list/`,
      ENTITY_DROP_DOWN_DATA: `${BASE_URL}task/entity-list/`,
      SAVE_NEW_TASK: `${BASE_URL}task/`,
    },
    EDIT_TASK: {
      GET_CLIENT_TASK_DETAIL: `${BASE_URL}task/details/`,
    },
  },

  DOCUMENTS: {
    DOCUMENTS_LIST: `${BASE_URL}document/`,
    COLUMN_NAME_LIST_URL: `${BASE_URL}document/column-name/`,
    GET_DOCUMENT_TYPE_URL: `${BASE_URL}document/type-list/`,
    UPLOAD_DOCUMENT_URL: `${BASE_URL}document/upload/`,
    DOWNLOAD_DOCUMENTS_URL: `${BASE_URL}document/download`,
  },

  NOTES: {
    NOTES_LIST: `${BASE_URL}note/`,
  },

  STAKE_HOLDER: {
    STAKE_HOLDER_LIST: `${BASE_URL}credit-limit/stakeholder/`,
    COLUMN_NAME_LIST_URL: `${BASE_URL}credit-limit/column-name/`,
    UPDATE_COLUMN_NAME_LIST_URL: `${BASE_URL}credit-limit/column-name/`,
  },
};

export const CLAIMS_URLS = {
  CLAIMS_LIST: `${BASE_URL}claim/`,
  CLAIMS_COLUMN_LIST: `${BASE_URL}claim/column-name/`,
  UPDATE_CLAIMS_COLUMN_LIST: `${BASE_URL}claim/column-name/`,
  GET_CLAIMS_ENTITY_LIST: `${BASE_URL}claim/entity-list`,
  ADD_CLAIM: `${BASE_URL}claim/`,
  GET_CLAIM_DETAILS: `${BASE_URL}claim/`,

  DOCUMENTS: {
    DOCUMENTS_LIST: `${BASE_URL}claim/document/`,
    DOWNLOAD_DOCUMENTS: `${BASE_URL}claim/document/download/`,
  },
};

export const EMPLOYEE_URLS = {
  EMPLOYEE_LIST_URL: `${BASE_URL}client/user/`,
  EMPLOYEE_COLUMN_LIST: `${BASE_URL}client/user/column-name/`,
  EMPLOYEE_UPDATE_COLUMN_LIST: `${BASE_URL}client/user/column-name/`,
};

export const COMPANY_PROFILE_URL = {
  COMPANY_PROFILE_URL: `${BASE_URL}client/`,
  COMPANY_PROFILE_POLICY_LIST: `${BASE_URL}policy/`,
  COMPANY_PROFILE_POLICY_COLUMN_LIST: `${BASE_URL}policy/column-name/`,
};

export const SUPPORT_URLS = {
  SUPPORT_URL: `${BASE_URL}organization/details/`,
};

export const OVERDUE_URLS = {
  GET_OVERDUE_LIST: `${BASE_URL}overdue/`,
  GET_OVERDUE_LIST_BY_DATE: `${BASE_URL}overdue/list/`,
  GET_ENTITY_LIST: `${BASE_URL}overdue/entity-list/`,
  CHANGE_OVERDUE_STATUS: `${BASE_URL}overdue/status/`,
  SAVE_OVERDUE_LIST: `${BASE_URL}overdue/list/`,
};

export const ORGANISATION_MODULE_URLS = {
  GET_ORGANIZATION_MODULE_LIST_URL: `${BASE_URL}organization/module`,
};

export const USER_MANAGEMENT_URLS = {
  USER_LIST_URL: `${BASE_URL}user/`,
  USER_PRIVILEGES_URL: `${BASE_URL}privilege/`,
  SELECTED_USER_DETAILS_URL: `${BASE_URL}user/`,
  USER_COLUMN_NAME_LIST_URL: `${BASE_URL}user/column-name/`,
  USER_CLIENT_LIST_URL: `${BASE_URL}user/client-name/`,
  UPDATE_USER_COLUMN_NAME_LIST_URL: `${BASE_URL}user/column-name/`,
  RESEND_MAIL: `${BASE_URL}user/send-mail/`,
};
