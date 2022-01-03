import {
  inject,
  injectable,
  LazyServiceIdentifer,
  multiInject,
  named,
  optional,
  postConstruct,
  preDestroy,
  tagged,
  targetName,
  unmanaged,
} from 'inversify';
import { propertyEventDecorator } from 'inversify/lib/annotation/property_event_decorator';

export const Inject = inject;
export const Injectable = injectable;
export const IsOptional = optional;
export const PostConstruct = postConstruct;
export const PreDestroy = preDestroy;
export const MultiInject = multiInject;
export const LazyServiceIdentifier = LazyServiceIdentifer;
export const Named = named;
export const PropertyEvent = propertyEventDecorator;
export const Tagged = tagged;
export const TargetName = targetName;
export const Unmanaged = unmanaged;
