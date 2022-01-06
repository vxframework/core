import { Injectable, Inject } from '../decorators';
import { IMetadataReader } from '../../interfaces';
import { LocalEventReader } from './local-event.reader';
import { NetEventReader } from './net-event.reader';

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
