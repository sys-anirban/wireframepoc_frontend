import React, { Component } from 'react';
import { Form as FromikForm, Formik } from 'formik';

class Form extends Component {
  static defaultProps = {
    initialValues: {},
    enableReinitialize: false,
  };
  onSubmit = (values) => {
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit(values);
    }
  };
  render() {
    const { initialValues, enableReinitialize, children, className, validationSchema } = this.props;
    return (
      <div className={className}>
        <Formik
          onSubmit={this.onSubmit}
          initialValues={initialValues}
          enableReinitialize={enableReinitialize}
          validationSchema={validationSchema}
        >
          {() => <FromikForm>{children}</FromikForm>}
        </Formik>
      </div>
    );
  }
}
export default Form;
