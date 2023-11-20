import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutDropDown extends Schema.Component {
  collectionName: 'components_layout_drop_downs';
  info: {
    displayName: 'dropDown';
    icon: 'angle-down';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface LayoutNavLink extends Schema.Component {
  collectionName: 'components_layout_nav_links';
  info: {
    displayName: 'NavLink';
    icon: 'apple-alt';
    description: '';
  };
  attributes: {
    isDropDown: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    url: Attribute.String;
    dropDown: Attribute.Component<'layout.drop-down', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.drop-down': LayoutDropDown;
      'layout.nav-link': LayoutNavLink;
    }
  }
}
