from setuptools import setup, find_namespace_packages

settings = {
    'name': 'Citati-Common',
    'description': 'Citatki common',
    'zip_safe': False,
    'include_package_data': True,
    'packages': find_namespace_packages(include=('.*',)),
    'entry_points': {
        'console_scripts': [
            'website = citati.website:main'
        ],
    },
    'install_requires': [
        'starlette',
        'uvicorn',
    ],
}


def main():
    setup(**settings)


if __name__ == '__main__':
    main()