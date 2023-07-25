import { TemplateDelegate } from 'handlebars';
export interface ITemplatedData {
  name: string;
  link: string;
}
export interface ITemplates {
  confirmation: TemplateDelegate<ITemplatedData>;
  resetPassword: TemplateDelegate<ITemplatedData>;
}
