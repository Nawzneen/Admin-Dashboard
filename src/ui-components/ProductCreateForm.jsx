/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { generateClient } from "aws-amplify/api";
import { listGenres, listPlatforms } from "../graphql/queries";
import { createProduct } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ProductCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    isSold: false,
    price: "",
    image: undefined,
    Platform: undefined,
    Genre: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [isSold, setIsSold] = React.useState(initialValues.isSold);
  const [price, setPrice] = React.useState(initialValues.price);
  const [image, setImage] = React.useState(initialValues.image);
  const [Platform, setPlatform] = React.useState(initialValues.Platform);
  const [PlatformLoading, setPlatformLoading] = React.useState(false);
  const [platformRecords, setPlatformRecords] = React.useState([]);
  const [Genre, setGenre] = React.useState(initialValues.Genre);
  const [GenreLoading, setGenreLoading] = React.useState(false);
  const [genreRecords, setGenreRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setIsSold(initialValues.isSold);
    setPrice(initialValues.price);
    setImage(initialValues.image);
    setPlatform(initialValues.Platform);
    setCurrentPlatformValue(undefined);
    setCurrentPlatformDisplayValue("");
    setGenre(initialValues.Genre);
    setCurrentGenreValue(undefined);
    setCurrentGenreDisplayValue("");
    setErrors({});
  };
  const [currentPlatformDisplayValue, setCurrentPlatformDisplayValue] =
    React.useState("");
  const [currentPlatformValue, setCurrentPlatformValue] =
    React.useState(undefined);
  const PlatformRef = React.createRef();
  const [currentGenreDisplayValue, setCurrentGenreDisplayValue] =
    React.useState("");
  const [currentGenreValue, setCurrentGenreValue] = React.useState(undefined);
  const GenreRef = React.createRef();
  const getIDValue = {
    Platform: (r) => JSON.stringify({ id: r?.id }),
    Genre: (r) => JSON.stringify({ id: r?.id }),
  };
  const PlatformIdSet = new Set(
    Array.isArray(Platform)
      ? Platform.map((r) => getIDValue.Platform?.(r))
      : getIDValue.Platform?.(Platform)
  );
  const GenreIdSet = new Set(
    Array.isArray(Genre)
      ? Genre.map((r) => getIDValue.Genre?.(r))
      : getIDValue.Genre?.(Genre)
  );
  const getDisplayValue = {
    Platform: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Genre: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    isSold: [],
    price: [],
    image: [],
    Platform: [],
    Genre: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchPlatformRecords = async (value) => {
    setPlatformLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listPlatforms.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listPlatforms?.items;
      var loaded = result.filter(
        (item) => !PlatformIdSet.has(getIDValue.Platform?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setPlatformRecords(newOptions.slice(0, autocompleteLength));
    setPlatformLoading(false);
  };
  const fetchGenreRecords = async (value) => {
    setGenreLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listGenres.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listGenres?.items;
      var loaded = result.filter(
        (item) => !GenreIdSet.has(getIDValue.Genre?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setGenreRecords(newOptions.slice(0, autocompleteLength));
    setGenreLoading(false);
  };
  React.useEffect(() => {
    fetchPlatformRecords("");
    fetchGenreRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          isSold,
          price,
          image,
          Platform,
          Genre,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            isSold: modelFields.isSold,
            price: modelFields.price,
            image: modelFields.image,
            platformID: modelFields?.Platform?.id,
            genreID: modelFields?.Genre?.id,
          };
          await client.graphql({
            query: createProduct.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              isSold,
              price,
              image,
              Platform,
              Genre,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <SwitchField
        label="Is sold"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isSold}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              isSold: value,
              price,
              image,
              Platform,
              Genre,
            };
            const result = onChange(modelFields);
            value = result?.isSold ?? value;
          }
          if (errors.isSold?.hasError) {
            runValidationTasks("isSold", value);
          }
          setIsSold(value);
        }}
        onBlur={() => runValidationTasks("isSold", isSold)}
        errorMessage={errors.isSold?.errorMessage}
        hasError={errors.isSold?.hasError}
        {...getOverrideProps(overrides, "isSold")}
      ></SwitchField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              isSold,
              price: value,
              image,
              Platform,
              Genre,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <Field
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        label={"Image"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setImage((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  name,
                  isSold,
                  price,
                  image: value,
                  Platform,
                  Genre,
                };
                const result = onChange(modelFields);
                value = result?.image ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setImage((prev) => {
              let value = initialValues?.image;
              if (onChange) {
                const modelFields = {
                  name,
                  isSold,
                  price,
                  image: value,
                  Platform,
                  Genre,
                };
                const result = onChange(modelFields);
                value = result?.image ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"private"}
          acceptedFileTypes={[]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "image")}
        ></StorageManager>
      </Field>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              isSold,
              price,
              image,
              Platform: value,
              Genre,
            };
            const result = onChange(modelFields);
            value = result?.Platform ?? value;
          }
          setPlatform(value);
          setCurrentPlatformValue(undefined);
          setCurrentPlatformDisplayValue("");
        }}
        currentFieldValue={currentPlatformValue}
        label={"Platform"}
        items={Platform ? [Platform] : []}
        hasError={errors?.Platform?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Platform", currentPlatformValue)
        }
        errorMessage={errors?.Platform?.errorMessage}
        getBadgeText={getDisplayValue.Platform}
        setFieldValue={(model) => {
          setCurrentPlatformDisplayValue(
            model ? getDisplayValue.Platform(model) : ""
          );
          setCurrentPlatformValue(model);
        }}
        inputFieldRef={PlatformRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Platform"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Platform"
          value={currentPlatformDisplayValue}
          options={platformRecords
            .filter((r) => !PlatformIdSet.has(getIDValue.Platform?.(r)))
            .map((r) => ({
              id: getIDValue.Platform?.(r),
              label: getDisplayValue.Platform?.(r),
            }))}
          isLoading={PlatformLoading}
          onSelect={({ id, label }) => {
            setCurrentPlatformValue(
              platformRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPlatformDisplayValue(label);
            runValidationTasks("Platform", label);
          }}
          onClear={() => {
            setCurrentPlatformDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchPlatformRecords(value);
            if (errors.Platform?.hasError) {
              runValidationTasks("Platform", value);
            }
            setCurrentPlatformDisplayValue(value);
            setCurrentPlatformValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Platform", currentPlatformDisplayValue)
          }
          errorMessage={errors.Platform?.errorMessage}
          hasError={errors.Platform?.hasError}
          ref={PlatformRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Platform")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              isSold,
              price,
              image,
              Platform,
              Genre: value,
            };
            const result = onChange(modelFields);
            value = result?.Genre ?? value;
          }
          setGenre(value);
          setCurrentGenreValue(undefined);
          setCurrentGenreDisplayValue("");
        }}
        currentFieldValue={currentGenreValue}
        label={"Genre"}
        items={Genre ? [Genre] : []}
        hasError={errors?.Genre?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Genre", currentGenreValue)
        }
        errorMessage={errors?.Genre?.errorMessage}
        getBadgeText={getDisplayValue.Genre}
        setFieldValue={(model) => {
          setCurrentGenreDisplayValue(
            model ? getDisplayValue.Genre(model) : ""
          );
          setCurrentGenreValue(model);
        }}
        inputFieldRef={GenreRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Genre"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Genre"
          value={currentGenreDisplayValue}
          options={genreRecords
            .filter((r) => !GenreIdSet.has(getIDValue.Genre?.(r)))
            .map((r) => ({
              id: getIDValue.Genre?.(r),
              label: getDisplayValue.Genre?.(r),
            }))}
          isLoading={GenreLoading}
          onSelect={({ id, label }) => {
            setCurrentGenreValue(
              genreRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentGenreDisplayValue(label);
            runValidationTasks("Genre", label);
          }}
          onClear={() => {
            setCurrentGenreDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchGenreRecords(value);
            if (errors.Genre?.hasError) {
              runValidationTasks("Genre", value);
            }
            setCurrentGenreDisplayValue(value);
            setCurrentGenreValue(undefined);
          }}
          onBlur={() => runValidationTasks("Genre", currentGenreDisplayValue)}
          errorMessage={errors.Genre?.errorMessage}
          hasError={errors.Genre?.hasError}
          ref={GenreRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Genre")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
