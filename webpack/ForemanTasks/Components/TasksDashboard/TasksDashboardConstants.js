import { translate as __ } from 'foremanReact/common/I18n';

export const TASKS_DASHBOARD_AVAILABLE_QUERY_STATES = {
  RUNNING: 'running',
  PAUSED: 'paused',
  STOPPED: 'stopped',
  SCHEDULED: 'scheduled',
};

export const TASKS_DASHBOARD_AVAILABLE_QUERY_RESULTS = {
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
};

export const TASKS_DASHBOARD_AVAILABLE_QUERY_MODES = {
  LAST: 'last',
  OLDER: 'older',
};

export const TASKS_DASHBOARD_AVAILABLE_TIMES = {
  H24: 'H24',
  H12: 'H12',
  WEEK: 'WEEK',
};

export const TASKS_DASHBOARD_AVAILABLE_TIMES_TEXT = {
  [TASKS_DASHBOARD_AVAILABLE_TIMES.H24]: __('24h'),
  [TASKS_DASHBOARD_AVAILABLE_TIMES.H12]: __('12h'),
  [TASKS_DASHBOARD_AVAILABLE_TIMES.WEEK]: __('week'),
};
