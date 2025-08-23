import { HttpClient, ZionClientConfig } from './http';
import { AuthModule } from './modules/auth';
import { MarketplaceModule } from './modules/marketplace';
import { DaoModule } from './modules/dao';
import { TokenModule } from './modules/token';
import { ProposalEngineModule } from './modules/proposals';
import { AcademyModule } from './modules/academy';
import { NationModule } from './modules/nation';

export type ZionClientOptions = ZionClientConfig;

export class ZionClient {
  readonly http: HttpClient;
  readonly auth: AuthModule;
  readonly marketplace: MarketplaceModule;
  readonly dao: DaoModule;
  readonly token: TokenModule;
  readonly proposals: ProposalEngineModule;
  readonly academy: AcademyModule;
  readonly nation: NationModule;

  constructor(options: ZionClientOptions) {
    this.http = new HttpClient(options);
    this.auth = new AuthModule(this.http);
    this.marketplace = new MarketplaceModule(this.http);
    this.dao = new DaoModule(this.http);
    this.token = new TokenModule(this.http);
    this.proposals = new ProposalEngineModule(this.http);
    this.academy = new AcademyModule(this.http);
    this.nation = new NationModule(this.http);
  }
}