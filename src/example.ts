// This is just a dummy .ts file to play with lint rules

class Foo {
  public bar: string;
  constructor() {
    this.bar = 'bar';
  }
}

// $ExpectType "foo"
'foo';
