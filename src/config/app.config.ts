interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Health Coach', 'Admin'],
  tenantName: 'Company',
  applicationName: 'MyFitnessApp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user data', 'Manage company data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0fc1f15f-0cce-4032-905e-1d414e814c6a',
};
