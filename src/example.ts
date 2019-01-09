// This is just a dummy .ts file to play with lint rules and
// test that the root tslint.json is working as expected.

class Foo {
  public bar: string;
  constructor() {
    this.bar = 'bar';
  }
}

// $ExpectType "foo"
'foo';

// $ExpectType string[]
['foo', 'bar', 'baz'];
