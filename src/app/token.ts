import { InjectionToken } from "@angular/core";
import { ProjectInfo } from "./project-info/project-info";

export const PROJECT_INFO_DATA = new InjectionToken<ProjectInfo>('PROJECT_INFO_DATA');
