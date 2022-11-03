import React, {useContext, useEffect} from 'react'
import {render, screen} from '@testing-library/react'
import CartContextProvider, {CartContext} from '../CartContext'

const wrapper = ({children}) => <CartContextProvider>{children}</CartContextProvider>

const sampleProduct = {
  id: 2,
  name: 'Product Name Test',
  qty: 1,
  category: {
    en_name: 'english name',
    name: 'name',
  },
  product_template_attribute_lines: [
    {
      product_attribute: {
        name: 'product_attribute-name-test',
      },
      product_template_attribute_values: [
        {
          attribute_name: 'product_attribute-attribute_name-test',
        },
      ],
    },
  ],
}

test('test function add to cart', () => {
  const ContentTest = () => {
    const {cart, addProductToCart} = useContext(CartContext)

    useEffect(() => {
      addProductToCart(sampleProduct)
    }, [])

    return <div data-testid="cart-length">{cart.length}</div>
  }
  render(<ContentTest />, {wrapper})
  expect(screen.getByTestId('cart-length')).toHaveTextContent('1')
})

test('test function update spec input', () => {
  const ContentTest = () => {
    const {cart, addProductToCart, updateProductField} = useContext(CartContext)

    useEffect(() => {
      addProductToCart(sampleProduct)
      updateProductField({inputValue: 'new spec value', productId: 2, fieldName: 'spec'})
    }, [])

    if (cart.length > 0) {
      return <div data-testid="product-spec">{cart[0].notes}</div>
    }
    return null
  }
  render(<ContentTest />, {wrapper})
  expect(screen.getByTestId('product-spec')).toHaveTextContent('new spec value')
})

test('test function add to cart with category product name is bahasa indonesia', () => {
  sampleProduct.category.en_name = ''
  const ContentTest = () => {
    const {cart, addProductToCart} = useContext(CartContext)

    useEffect(() => {
      addProductToCart(sampleProduct)
    }, [])

    return <div data-testid="cart-length">{cart.length}</div>
  }
  render(<ContentTest />, {wrapper})
  expect(screen.getByTestId('cart-length')).toHaveTextContent('1')
})

test('test function update product to empty cart', () => {
  const ContentTest = () => {
    const {cart, updateProductField} = useContext(CartContext)

    useEffect(() => {
      updateProductField({inputValue: 'new value', productId: 2, fieldName: 'spec'})
    }, [])

    return <div data-testid="cart-length">{cart.length}</div>
  }
  render(<ContentTest />, {wrapper})
  expect(screen.getByTestId('cart-length')).toHaveTextContent('0')
})

test('test function add same product to cart', () => {
  const ContentTest = () => {
    const {cart, addProductToCart} = useContext(CartContext)

    useEffect(() => {
      addProductToCart(sampleProduct)
      addProductToCart(sampleProduct)
    }, [])

    return <div data-testid="cart-length">{cart.length}</div>
  }
  render(<ContentTest />, {wrapper})
  expect(screen.getByTestId('cart-length')).toHaveTextContent('1')
})

test('test function update qty field on cart with empty value', () => {
  const ContentTest = () => {
    const {cart, addProductToCart, updateProductField} = useContext(CartContext)

    useEffect(() => {
      addProductToCart(sampleProduct)
      updateProductField({inputValue: '', productId: 2, fieldName: 'qty'})
    }, [])

    if (cart.length > 0) {
      return <div data-testid="product-qty">{cart[0].qty}</div>
    }
    return null
  }
  render(<ContentTest />, {wrapper})
  expect(screen.getByTestId('product-qty')).toHaveTextContent('')
})

test('test function update qty field on cart with new value', () => {
  const ContentTest = () => {
    const {cart, addProductToCart, updateProductField} = useContext(CartContext)

    useEffect(() => {
      addProductToCart(sampleProduct)
      updateProductField({inputValue: 5, productId: 2, fieldName: 'qty'})
    }, [])

    if (cart.length > 0) {
      return <div data-testid="product-qty">{cart[0].qty}</div>
    }
    return null
  }
  render(<ContentTest />, {wrapper})
  expect(screen.getByTestId('product-qty')).toHaveTextContent('5')
})

test('test function remove item from cart', () => {
  const ContentTest = () => {
    const {cart, addProductToCart, removeProductFromCart} = useContext(CartContext)

    useEffect(() => {
      addProductToCart(sampleProduct)
      removeProductFromCart(2)
    }, [])

    return <div data-testid="cart-length">{cart.length}</div>
  }
  render(<ContentTest />, {wrapper})
  expect(screen.getByTestId('cart-length')).toHaveTextContent('0')
})

test('test function remove all items from cart', () => {
  const ContentTest = () => {
    const {cart, addProductToCart, clearCart} = useContext(CartContext)

    useEffect(() => {
      addProductToCart(sampleProduct)
      clearCart()
    }, [])

    return <div data-testid="cart-length">{cart.length}</div>
  }
  render(<ContentTest />, {wrapper})
  expect(screen.getByTestId('cart-length')).toHaveTextContent('0')
})
