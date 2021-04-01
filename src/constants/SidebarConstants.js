export const SIDEBAR_NAMES = {
  DASHBOARD: 'dashboard',
  APPLICATION: 'application',
  CREDIT_LIMITS: 'credit-limits',
  CLAIM: 'claim',
  OVERDUE: 'overdue',
  COMPANY_PROFILE: 'company-profile',
  EMPLOYEE: 'employee',
  SUPPORT : 'support',
};

export const SIDEBAR_URLS = [
  {
    label: 'Dashboard',
    title: 'Dashboard',
    icon: 'assessment',
    url: '/dashboard',
    name: SIDEBAR_NAMES.DASHBOARD,
  },
  {
    label: 'Application',
    title: 'Application',
    icon: 'business_center',
    url: '/applications',
    name: SIDEBAR_NAMES.APPLICATION,
  },
  {
    label: 'Credit Limits',
    title: 'Credit Limits',
    icon: 'account_circle',
    url: '/credit-limits',
    name: SIDEBAR_NAMES.CREDIT_LIMITS,
  },
  {
    label: 'Claims',
    title: 'Claims',
    icon: 'class',
    url: '/claims',
    name: SIDEBAR_NAMES.CLAIM,
  },
  {
    label: 'Overdues',
    title: 'Overdues',
    icon: 'list_alt',
    url: '/over-dues',
    name: SIDEBAR_NAMES.OVERDUE,
  },
  {
    label: 'Company Profile',
    title: 'Company Profile',
    icon: 'contact_page',
    url: '/company-profile',
    name: SIDEBAR_NAMES.COMPANY_PROFILE,
  },
  {
    label: 'Employee',
    title: 'Employee',
    icon: 'admin_panel_settings',
    url: '/employee',
    name: SIDEBAR_NAMES.EMPLOYEE,
  },
  {
    label: 'Support',
    title: 'Support',
    icon: 'contact_support',
    url: '/support',
    name: SIDEBAR_NAMES.SUPPORT,
  },
];
