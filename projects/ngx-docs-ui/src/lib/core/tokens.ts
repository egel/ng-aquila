import { InjectionToken } from '@angular/core';
import { ExampleList } from '../example-collection';
import { Manifest } from './manifest';
import { DocVersions, LogoPath, GithubLinkConfig } from './types';

export const NX_EXAMPLES_TOKEN = new InjectionToken<{value: ExampleList}>('NX_EXAMPLES_TOKEN');
export const NXV_MANIFEST_TOKEN = new InjectionToken<{value: Manifest}>('NXV_MANIFEST_TOKEN');
export const NX_DOC_VERSIONS = new InjectionToken<DocVersions>('NX_DOC_VERSIONS');
export const NX_DOCS_LOGO_PATH = new InjectionToken<LogoPath>('NX_DOCS_LOGO_PATH');
export const NXV_FOOTER = new InjectionToken<any>('NXV_FOOTER');
export const NX_DOCS_GITHUB_LINK = new InjectionToken<GithubLinkConfig>('NX_DOCS_GITHUB_LINK');
