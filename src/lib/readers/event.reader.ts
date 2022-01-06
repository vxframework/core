import {
  IMetadataReader,
  Inject,
  Injectable,
  LocalEventReader,
  NetEventReader,
} from '../../../lib';

@Injectable()
export class EventReader implements IMetadataReader {
  @Inject(NetEventReader)
  private netEventReader: NetEventReader;

  @Inject(LocalEventReader)
  private localEventReader: LocalEventReader;

  public read(target: unknown): void {
    this.netEventReader.read(target);
    this.localEventReader.read(target);
  }
}
