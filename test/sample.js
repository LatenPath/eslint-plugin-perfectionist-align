/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
//
//------------------------------------------------------------------------------
// Waiting for the following to be resolved:
//
// FIX: import     'abc'; => import 'abc';
import     'abc'; // Redundent spacing
// FIX: }     from 'e'; => } from 'e';
import {
  xxx,
  yyy,
  zzz,
}     from 'e'; // Multiline import statement
//
//------------------------------------------------------------------------------
import defaultExport from 'module-name';
import * as name from 'module-name';
import { export1 }  from 'module-name';
import { export2 as alias1 } from 'module-name';
import { export3, export4 } from 'module-name';
import { foo, bar } from 'module-name/path/to/specific/un-exported/file';
import { export5, export6 as alias7 } from 'module-name';
import defaultExport2, { export8 } from 'module-name';
import defaultExport3, * as name2 from 'module-name';

import { CheckBox, InputField } from '@components';
import { users, posts } from '@store';
import { createClassName } from '../utils/ClassName';
import { on, off } from '../utils/events';
import * as styles from '../styles/core';

import a from 'a';
import bb from 'b';
import ccc from 'c';
import'd';
