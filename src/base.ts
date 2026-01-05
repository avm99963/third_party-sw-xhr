export default class XMLHttpRequestPolyfillBase {
  public readonly DONE = 4;
  public readonly HEADERS_RECEIVED = 2;
  public readonly LOADING = 3;
  public readonly OPENED = 1;
  public readonly UNSENT = 0;

  public readyState: number = this.UNSENT;
  public response: any;
  public responseText: string = '';
  public responseType: XMLHttpRequestResponseType = '';
  public responseURL: string = '';
  public responseXML: Document | null = null;
  public status: number = -1;
  public statusText: string = '';
  public timeout: number = -1;
  public upload: XMLHttpRequestUpload = null as any;
  public withCredentials: boolean = false;
}
