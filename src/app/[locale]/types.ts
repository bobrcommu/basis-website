export interface LocaleParams {
  params: {
    locale: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}
